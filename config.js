// Portfolio AI Chatbot Configuration
const PORTFOLIO_AI_CONFIG = {
  // Reads key dynamically from env.js (window.ENV_API_KEY) or process.env (Git ignored)
  GEMINI_API_KEY: (typeof window !== "undefined" && window.ENV_API_KEY)
    ? window.ENV_API_KEY
    : (typeof process !== "undefined" && process.env && process.env.GEMINI_API_KEY)
      ? process.env.GEMINI_API_KEY
      : "",

  // Preferred Gemini Model (gemini-2.5-flash)
  MODEL_NAME: "gemini-2.5-flash",

  // Strict knowledge scope boundary setting
  STRICT_KNOWLEDGE_ONLY: true,

  // Fallback refusal message for off-topic questions
  REFUSAL_MESSAGE: "I am an AI assistant specialized exclusively in Prabhat Jha's professional background and ETRM expertise. I can only answer questions related to Prabhat's skills, experience, education, domain expertise, and ETRM consulting career."
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_AI_CONFIG = PORTFOLIO_AI_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
