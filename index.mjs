import { readText } from "./fileReader/index.mjs";
import { sanitizeText } from "./textSanitizer/index.mjs";

const textFromCLI = process.argv.slice(2)[0];

// El Quijote
const defaultText = "https://www.gutenberg.org/files/2000/2000-0.txt";
// or "Sherlock.txt" or "https://www.gutenberg.org/files/1661/1661-0.txt"

let fullText = await readText(textFromCLI || defaultText);

console.time("Parsing data");

fullText = sanitizeText(fullText);

fullText = fullText.split(" ");

let obj = {};

for (let x = 0; x < fullText.length; x++) {
  if (obj[fullText[x]]) {
    obj[fullText[x]].count++;
  } else obj[fullText[x]] = { count: 1 };
}

//sorting
let result = Object.entries(obj).sort((a, b) => b[1].count - a[1].count);
const dictionaryLength = result.length;

let mustLearnWords = result.splice(0, Math.round(dictionaryLength * 0.2));
mustLearnWords = mustLearnWords.map((word) => {
  return { word: word[0], count: word[1].count };
});
console.log(
  "🚀 ~ file: index.mjs ~ line 34 ~ mustLearnWords=mustLearnWords.map ~ mustLearnWords",
  mustLearnWords
);

console.timeEnd("Parsing data");
