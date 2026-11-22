import axios from "axios";
import { HOME_DIR, CONFIG_DIR } from "./constant.js";
import fs from "fs/promises";
import path from "path";

export async function getSettingsFile() {
  try {
    await fs.access(CONFIG_DIR);
  } catch (error) {
    await fs.mkdir(CONFIG_DIR, { recursive: true });
  }

  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  try {
    await fs.access(settingsFilePath);
    const content = await fs.readFile(settingsFilePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    await fs.writeFile(settingsFilePath, JSON.stringify({}));
    return {};
  }
}

export async function saveApiKey(apiKey) {
  const settingsFilePath = path.join(CONFIG_DIR, "settings.json");

  const settingsContent = await getSettingsFile();

  await fs.writeFile(
    settingsFilePath,
    JSON.stringify({ ...settingsContent, apiKey }),
  );
}

export async function getApiKey() {
  const setting = await getSettingsFile();
  const apiKey = setting.apiKey || null;

  if (!apiKey) {
    return {
      error: "Api key not found in setting file",
    };
  }

  try {
    const response = await axios.get("https://api.groq.com/openai/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
