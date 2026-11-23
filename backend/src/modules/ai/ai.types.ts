export type InterviewMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type InterviewRequest = {
  questionId: string;
  candidateResponse: string;
  conversationHistory?: InterviewMessage[];
};

export type InterviewReply = {
  message: string;
  isComplete: boolean;
};