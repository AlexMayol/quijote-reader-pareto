import { sanitizeText } from "./index";

const cases = [
  { input: "Hello, world!", output: "hello world" },
  { input: "Wait, what??", output: "wait what" },
  { input: "That's a lot of % damage!", output: "thats a lot of damage" },
  {
    input: `Precisely so, on December 22nd, just five days ago. John Horner, a
      plumber, was accused of having abstracted it from the lady’s
      jewel-case.`,
    output: `precisely so on december just five days ago john horner a plumber was accused of having abstracted it from the ladys jewel case`,
  },
  {
    input: `You’re angry, Robert,” said she. “Well, I guess you have every cause
    to be.`,
    output: `youre angry robert said she well i guess you have every cause to be`,
  },
  {
    input: `“I think that there you ask a little too much,” responded his Lordship.
    “I may be forced to acquiesce in these recent developments`,
    output: `i think that there you ask a little too much responded his lordship i may be forced to acquiesce in these recent developments`,
  },
  {
    input: `I think that with your
    permission I will now wish you all a very good-night.” He included us
    all in a sweeping bow and stalked out of the room.`,
    output: `i think that with your permission i will now wish you all a very good night he included us all in a sweeping bow and stalked out of the room`,
  },
  {
    input: `I
    thought that, as we were a _partie carrée_, you might have your rubber
    after all.`,
    output: `i thought that as we were a partie carrée you might have your rubber after all`,
  },
  {
    input: `“‘_L’homme c’est rien—l’œuvre c’est tout_,’`,
    output: `lhomme cest rien lœuvre cest tout`,
  },
  {
    input: `“No legal papers or certificates?”

    “None.”`,
    output: `no legal papers or certificates none`,
  },
];

test("Correctly sanitizes a text", () => {
  for (let x = 0; x < cases.length; x++) {
    expect(sanitizeText(cases[x].input)).toEqual(cases[x].output);
  }
});
