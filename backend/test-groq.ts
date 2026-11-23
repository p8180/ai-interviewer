import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main() {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      {
        role: "user",
        content: "Introduce yourself as Orbit, an AI technical interviewer, in one sentence.",
      },
    ],
  });

  console.log(response.choices[0]?.message?.content);
}

main().catch(console.error);