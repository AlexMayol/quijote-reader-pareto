import { readFileSync } from "fs";
import fetch from "node-fetch";

const readTextFromURL = async (url) => {
  if (!url) return;
  let data = await fetch(url);
  return await data.text();
};

const readTextFromFile = (path) => {
  if (!path) return;
  return readFileSync(path, "utf8");
};

export const readText = async (source) => {
  if (source.includes("http")) return await readTextFromURL(source);
  else return readTextFromFile(source);
};
