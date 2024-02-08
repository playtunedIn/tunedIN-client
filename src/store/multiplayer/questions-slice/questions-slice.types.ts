export interface QuestionsState {
  questions: ReceivedQuestion[];
  questionIndex: number;
}

export interface ReceivedQuestion {
  description: string;
  expirationTimestamp: number;
  question: string;
  choices: string[];
  answers?: number[];
}
