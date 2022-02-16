import { sanitizeText } from "./index";

const cases = [
  { input: "Hello, world!", output: "hello world" },
  { input: "Wait, what??", output: "wait what" },
  { input: "That's a lot of % damage!", output: "thats a lot of  damage" },
  {
    input:
      "Are you telling me that... We are going to THE BEACH!? THAT'S &$%!!!",
    output: "are you telling me that we are going to the beach thats ",
  },
];

test("Correctly sanitizes a text", () => {
  for (let x = 0; x < cases.length; x++) {
    expect(sanitizeText(cases[x].input)).toEqual(cases[x].output);
  }
});
