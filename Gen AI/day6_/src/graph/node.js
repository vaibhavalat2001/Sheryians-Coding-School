import { ChatGroq } from "@langchain/groq";
import { getApiKey } from "../utils/file.utils.js";
import { AIMessage } from "langchain";

async function LLMNode(state) {

  const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: (await getApiKey()).apiKey,
  });

  const stream = await model.stream(state.messages);

  process.stdout.write("[AI]: ");

  let aiMessage = "";
  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
    aiMessage += chunk.text;
  }
  process.stdout.write("\n\n");
  return {
    messages: [...state.messages, new AIMessage(aiMessage)],
  };
}

export default LLMNode;
