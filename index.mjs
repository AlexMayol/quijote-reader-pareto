import { readText } from "./fileReader/index.mjs";
import { sanitizeText } from "./textSanitizer/index.mjs";
import { writeFile } from "fs";

const pathFromCLI = process.argv.slice(2)[0];

const percentageOfBook = (process.argv.slice(2)[1] || 80) / 100;
// El Quijote
const defaultText = "https://www.gutenberg.org/files/2000/2000-0.txt";
// or "Sherlock.txt" or "https://www.gutenberg.org/files/1661/1661-0.txt"

let book = await readText(pathFromCLI || defaultText);

writeFile("outputs/original.txt", book, () => {});

console.time("Execution time");

book = sanitizeText(book);

writeFile("outputs/sanitized.txt", book, () => {});

book = book.split(" ");

let dictionary = {};

for (let x = 0; x < book.length; x++) {
  if (dictionary[book[x]]) dictionary[book[x]]++;
  else dictionary[book[x]] = 1;
}

//sort the dictionary
let sortedDictionary = Object.entries(dictionary).sort((a, b) => b[1] - a[1]);

writeFile(
  "outputs/dictionary.json",
  JSON.stringify(sortedDictionary),
  () => {}
);

const dictionaryLength = sortedDictionary.length;
const topWords = Math.round(book.length * percentageOfBook);

console.log(`
- 💬 The book has a total of ${book.length} words.
- 📘 The dictionary (non-repeated words) has ${dictionaryLength} words.
- ✔️ We want to understand the ${
  percentageOfBook * 100
}% of the book (${topWords} words).
`);

const mustLearnWords = [];

let remaining = topWords;

for (let i = 0; i < dictionaryLength; i++) {
  if (remaining <= 0) break;
  mustLearnWords.push({ word: sortedDictionary[i][0] });
  remaining -= sortedDictionary[i][1];
}

console.log(`
- 🔥 In order to understand ${
  percentageOfBook * 100
}% of the book, we need to learn ${(
  (mustLearnWords.length * 100) /
  dictionaryLength
).toFixed(2)}% of its words
  `);

console.timeEnd("Execution time");
