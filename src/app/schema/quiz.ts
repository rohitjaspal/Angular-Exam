import { Question } from "../interfaces/question.interface"
import { Quiz } from "../interfaces/quiz.interface"

const questions: Question[]  = [
    {
        id: '42156',
        questiontext: 'This photograph, ____ I took five years ago, shows the harbour quite well.',
        options: [
            {
                value:'who',
                isCorrect: false
            },
            {
                value:'whom',
                isCorrect: false
            },
            {
                value:'which',
                isCorrect: true
            },
            {
                value:'what',
                isCorrect: false
            }
        ]

    },
    {
        id: '28cfbac2-c205-45e7-8fde-17b68ed93cce',
        questiontext: 'The patient ____ by the doctor.',
        options: [
          {
            value: ' has being examined',
            isCorrect: true,
          },
          {
            value: 'when',
            isCorrect: false,
          },
          {
            value: 'which',
            isCorrect: false,
          },
          {
            value: 'what',
            isCorrect: false,
          },
        ],
      }
]

export const defaultQuiz: Quiz = {
    totalTime: 60,
    questions:questions
}