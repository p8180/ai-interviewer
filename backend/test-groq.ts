
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    temperature: 0.4,
    max_tokens: 300,
    messages: [
      {
        role: "system",
        content: `You are Orbit, an adaptive technical interviewer.
Ask one relevant follow-up question.
Adapt difficulty to the candidate's understanding.
Never repeat a question already asked.
Do not reveal the solution.`,
      },
      {
        role: "user",
        content: `Original question:
Implement a function that removes duplicates while preserving order.

Candidate's first answer:
I would use a Set and a new array to preserve the first occurrence of each value.

Orbit's previous follow-up:
What are the time and space complexities of this approach, and how would it behave with objects?

Candidate's second answer:
The time complexity is O(n), because Set lookups are generally O(1). Space complexity is O(n), because the Set and result array can both grow with the input. For objects, Set compares references rather than object contents.

Now ask one NEW follow-up question that builds on this answer. Do not repeat the previous question.`,
      },
    ],
  });

  console.log("\nORBIT ADAPTIVE FOLLOW-UP:\n");
  console.log(response.choices[0]?.message?.content);
}

main().catch(console.error);
