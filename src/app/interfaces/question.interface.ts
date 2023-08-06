import { Option } from './option.interface';

export interface Question {
    id: string;
    questiontext : string;
    options: Option[];
    answer? : string;
    isAnswerCorrect?: boolean;
}