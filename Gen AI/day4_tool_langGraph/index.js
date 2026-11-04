import { ChatGroq } from "@langchain/groq";
import "dotenv/config";
import rl from "readline/promises";
import * as z from "zod";
import { tool, createAgent } from "langchain";
import { StateGraph, START, END } from "@langchain/langgraph";

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

const readline = new rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const events = [];
const createEventTool = tool(
  async function ({ date, title, description }) {
    console.log("New events created", { date, title, description });
    events.push({ date, title, description });
    return "Event Created ";
  },
  {
    name: "createEvent",
    description: "New event create with date, title, and description",
    schema: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  },
);

const getEvents = tool(
  async function ({}) {
    console.log("Retrieves Events", events);
    return events;
  },
  {
    name: "getEvents",
    description: "Retrieves all events",
    schema: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  },
);

async function LLMNode(state) {
  console.log("LLMNode state: ", state);
  return {
    messages: [
      ...state.messages,
      {
        role: "assistant",
        content: "Hello, user",
      },
    ],
  };
}

const graph = new StateGraph(
  z.object({
    messages: z.array(z.any()),
  }),
)
  .addNode("LLMNode", LLMNode)
  .addEdge(START, "LLMNode")
  .addEdge("LLMNode", END)
  .compile();

while (true) {
  const userInput = await readline.question("Enter a question: ");

  const graphResult = await graph.invoke({
    messages: [
      {
        role: "user",
        content: userInput,
      },
    ],
  });

  console.log("Graph result ", graphResult);
}
