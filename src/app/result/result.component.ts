import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../interfaces/quiz.interface';
import { Question } from '../interfaces/question.interface';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
    quiz: Quiz | undefined;
    correct: Array<Question> = [];
    inCorrect: Array<Question> = [];

    constructor(private router: Router) {
        this.quiz = this.router.getCurrentNavigation()?.extras.state?.['quiz'];
    }

    ngOnInit(): void {
        if (this.quiz && this.quiz.questions?.length) {
            this.correct = this.quiz.questions.filter((q) => q.isAnswerCorrect);
            this.inCorrect = this.quiz.questions.filter((q) => !q.isAnswerCorrect);
        }
    }
}
