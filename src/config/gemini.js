import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Use the API key directly if not using environment variables
  const apiKey = "AIzaSyCK36Ik0_2XJFMEFlfVmtlzlSc53idgjh8"; // Replace with process.env.GEMINI_API_KEY if using environment variables
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
      // Adjust safety settings if necessary
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
  }
  
export default run;
  