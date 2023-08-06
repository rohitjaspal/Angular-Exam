import { Question } from "./question.interface";

export interface Quiz {
    totalTime: number; // in minutes
    questions: Question[];
}