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

let dictionary = {};

for (let x = 0; x < fullText.length; x++) {
  if (dictionary[fullText[x]]) {
    dictionary[fullText[x]].count++;
  } else dictionary[fullText[x]] = { count: 1 };
}

//sorting
let sortedDictionary = Object.entries(dictionary).sort(
  (a, b) => b[1].count - a[1].count
);
const dictionaryLength = sortedDictionary.length;
let mustLearnWords = sortedDictionary.splice(
  0,
  Math.round(dictionaryLength * 0.2)
);
mustLearnWords = mustLearnWords.map((word) => ({
  word: word[0],
  count: word[1].count,
}));

console.log(
  "🚀 ~ file: index.mjs ~ line 34 ~ mustLearnWords=mustLearnWords.map ~ mustLearnWords",
  mustLearnWords
);

console.timeEnd("Parsing data");
