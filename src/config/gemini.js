import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBNmiTCBaqDdqQQH_T6TM1j_eSl_2cQSY8";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text()); // Log the response text to console
  return result.response.text(); // Return the response text
}

export default run;
