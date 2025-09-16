import { GoogleGenerativeAI } from "@google/generative-ai";

async function main(prompt) {
  try {
    console.log('Received prompt:', prompt);
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set');
    }
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    console.log('Sending request to Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('Gemini response received:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

export default main;