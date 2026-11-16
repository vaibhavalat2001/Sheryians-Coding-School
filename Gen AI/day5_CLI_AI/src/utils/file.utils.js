import fs from "fs/promises";
import { HOME_DIR, CONFIG_DIR } from "./constant.js";
import path from "path";
import axios from "axios";

/*
 * Return the content of setting file (create if doesn't exist)
 *
 */
export async function getSettingsFile() {
  try {
    await fs.access(CONFIG_DIR);
  } catch (error) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  }

  const settingsFilePath = path.join(CONFIG_DIR, "setting.json");

  try {
    await fs.access(settingsFilePath);
    const content = await fs.readFile(settingsFilePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    await fs.writeFile(settingsFilePath, JSON.stringify({}));
    return {};
  }
}

/*
 * save api key to the setting.json file
 *
 */
export async function saveApiKey(apiKey) {
  const settingsFilePath = path.join(CONFIG_DIR, "setting.json");

  const settingsContent = await getSettingsFile();

  await fs.writeFile(
    settingsFilePath,
    JSON.stringify({
      ...settingsContent,
      apiKey,
    }),
  );
}

/*
 * get api key from setting.json file
 *
 */

export async function getApiKey() {
  const setting = await getSettingsFile();
  const apiKey = setting.apiKey || null;

  if (!apiKey) {
    return {
      error: "Api key not found in settings file",
    };
  }

  try {
    const response = await axios.get("https://api.groq.com/openai/v1/models", {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
      },
    });

    return {
      apiKey,
    };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return {
        error: "Invalid api key",
      };
    }
  }
}
