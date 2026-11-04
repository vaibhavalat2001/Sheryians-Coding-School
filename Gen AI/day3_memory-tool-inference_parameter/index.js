import { ChatGroq } from "@langchain/groq";
import rl from "readline/promises";
import "dotenv/config";
import * as z from "zod";
import { createAgent, tool } from "langchain";

const events = [];
const createEventTool = tool(
  async function ({ date, title, description }) {
    console.log("Event Created: ", { date, title, description });

    events.push({
      date,
      title,
      description,
    });
    return "Event Created ";
  },
  {
    name: "createEvent",
    description: "Create a new event with name, title, and description",
    schema: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  },
);

const getEventTool = tool(
  async function ({}) {
    console.log("Retrieves Events: ", events);
    return events;
  },
  {
    name: "getEvents",
    description: "Retrieves all events",
    schema: z.object({}),
  },
);

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

const readline = new rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const agent = createAgent({
  model,
  tools: [createEventTool, getEventTool],
});

const mess = [];

while (true) {
  const userInput = await readline.question("Enter a question: ");
  mess.push({
    role: "user",
    content: userInput,
  });

  const aiResponse = await agent.stream(
    {
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
    },

    { streamMode: "messages" },
  );

  let aiMessage;
  for await (const [chunk] of aiResponse) {
    process.stdout.write(chunk.content);
    aiMessage += chunk;
  }
  mess.push({ role: "assistant", content: aiMessage });
  process.stdout.write("\n\n");
}
