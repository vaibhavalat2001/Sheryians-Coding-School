import initGraph from "./graph/graph.js";
import { getApiKey, getSettingsFile, saveApiKey } from "./utils/file.utils.js";
import readline from "./utils/readline.js";

async function main() {
  const settings = await getSettingsFile();

  if (!settings.apiKey) {
    const apiKey = await readline.question("Please Enter your api key: ");
    await saveApiKey(apiKey);
  }

  const response = await getApiKey();

  if (response.error) {
    console.log(response.error);
    const apiKey = await readline.question("Please Enter your api key: ");
    await saveApiKey(apiKey);
    return main();
  }

  // console.log(response.apiKey);

  await initGraph();

  readline.close();
}

export default main;
