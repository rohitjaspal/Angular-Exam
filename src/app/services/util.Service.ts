import { Injectable } from '@angular/core';
import { Quiz } from '../interfaces/quiz.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getQuiz(): Quiz | null {
    const quiz = localStorage.getItem('quiz');
    if (quiz) {
      const quizObj: Quiz = JSON.parse(quiz);
      return quizObj;
    } else {
      return null;
    }
  }

  // getQuestions(){
  //   const quizData = localStorage.getItem('Quiz');
  //   const currentUserQuizData = 
  // }

  getMyQuiz(): Quiz | null {
    const quiz = sessionStorage.getItem('myQuiz');
    if(quiz) {
      const quizObj: Quiz = JSON.parse(quiz);
      return quizObj; 
    }else {
      return null;
    }
  }
}
