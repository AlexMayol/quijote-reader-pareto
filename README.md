# Pareto challenge

## What is the Pareto principle?
*The Pareto principle states that for many outcomes, roughly 80% of consequences come from 20% of causes. In other words, a small percentage of causes have an outsized effect. This concept is important to understand because it can help you identify which initiatives to prioritize so you can make the most impact.*

## What is this script for?
We want to know, for a given text (ideally, a book), how many words a reader would need in order to understand a given percentage of the book. 

For example, given the book [*Don Quijote*](https://www.gutenberg.org/files/2000/2000-0.txt), how many words would we need to know in order to understand a given percentage of it?

## How to run the script
This is a simple CLI script which accept two parameters
- A path to a text (from the root of the project or in a web server)
- The percentage of the book we want to understand

### Examples
After installing the dependencies with `npm install`, we can run the script with no parameters.

`node index.mjs`
This will give you the Pareto number for the *Don Quijote* book with a percentage of 80:
```
- 💬 The book has a total of 396784 words.
- 📘 The dictionary (non-repeated words) has 24353 words.
- ✔️ We want to understand the 80% of the book (317427 words).
- 🔥 In order to understand 80% of the book, we need to learn 4.48% of this book's words
```

`node index.mjs https://www.gutenberg.org/files/1661/1661-0.txt 60`
Will give you the following result for *The Adventures of Sherlock Holmes* given a percentage of 60:
```

- 💬 The book has a total of 108430 words.
- 📘 The dictionary (non-repeated words) has 8211 words.
- ✔️ We want to understand the 60% of the book (65058 words).
- 🔥 In order to understand 60% of the book, we need to learn 1.50% of its words
```

Try this out with different percentages and check out how many words you'd need to understand most of a book's content. Learning a new language doesn't seem that difficult now, uh?