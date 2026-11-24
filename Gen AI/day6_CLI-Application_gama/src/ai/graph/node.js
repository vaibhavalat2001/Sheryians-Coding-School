import { ChatGroq } from "@langchain/groq";
import { getApiKey } from "../../utils/file.utils.js";
import { AIMessage } from "langchain";
import { upsertFilesTool } from "../tools/files.tool.js";

async function LLMNode(state, config) {
  // console.log(config);

  const model = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: (await getApiKey()).apiKey,
  });

  const modelWithTools = model.bindTools([upsertFilesTool]);

  const stream = await modelWithTools.stream(state.messages);

  process.stdout.write("[AI]: ");

  let aiMessage = "";
  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
    aiMessage += chunk.text;
    console.log(chunk)
  }
  process.stdout.write("\n\n");
  return {
    messages: [...state.messages, new AIMessage(aiMessage)],
  };
}

export default LLMNode;
