import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { Option } from '../interfaces/option.interface';
import { isNil, map } from 'lodash';
import Swal from 'sweetalert2';
import { NavigationExtras, Router } from '@angular/router';
import { Quiz } from '../interfaces/quiz.interface';
import { Subscription, timer} from 'rxjs';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
})

export class QuizComponent implements OnInit, OnDestroy {
    currentQuestionNumber: number = 1;
    questions: Question[] = [];
    quiz: Quiz | undefined;
    questionIdList: string[] = [];
    currentQuestion: Question | undefined;
    selectedOption: string = '';
    countDown: Subscription | undefined | null;
    //counter = 7201;
    counter = 7;
    countUp:boolean = false;
    tick = 1000;

    constructor(private readonly router:Router) {
        const quiz = localStorage.getItem('Quiz');
        if (quiz) {
            const data: Quiz = JSON.parse(quiz);
            this.quiz = data;
            this.questions = this.quiz.questions;
            this.currentQuestion = this.questions[0];
            if (this.questions.length) this.questionIdList = this.questions.map((q) => q.id);
        }
    }

    ngOnInit(){
        this.countDown = timer(0, this.tick).subscribe((count) => {
            if (this.counter == 1 && count) {
                this.countUp = true;
                this.router.navigate(['result']);
                this.onSubmit();
              if (this.countDown) {
                this.countDown.unsubscribe();
              }
            }
            --this.counter;
          });
    }

    getQuestionById(id: string, questions: Array<Question>): Question | null {
        const question = questions.find((q) => q.id === id);
        if(question){
          return question;
        } else{
          return null;
        }
    }

    onChange(question: Question , value: string) {
        const questions = this.questions.map((q) => {
            if(q.id === question.id){
                return {...q , answer: value};
            }else{
                return q;
            }
        })
        this.questions = questions;
    }

    nextQuestion(currentQuestionId: string): void {
        const index = this.questionIdList.findIndex((q) => q === currentQuestionId);
        const nextindex = index + 1;
        if (nextindex > this.questionIdList.length - 1) {
            return;
        } else {
            const nextid = this.questionIdList[nextindex];
            const question = this.getQuestionById(nextid, this.questions);
            if(question){
              this.currentQuestion = question;
              this.currentQuestionNumber = nextindex + 1;
            }
        }
    }

    previousQuestion(currentQuestionId: string) : void {
        const index = this.questionIdList.findIndex((q) => q === currentQuestionId);
        const previousIndex = index - 1;
        if (index === 0) {
            return;
        } else {
            const previousId = this.questionIdList[previousIndex];
            const question = this.getQuestionById(previousId, this.questions);
            if(question){
              this.currentQuestion = question;
              this.currentQuestionNumber = previousIndex + 1;
            }
        }
    }


    onSubmit(){
        if(this.countUp === true){
            const questions = this.questions.map((q) => {
                const correctOption = q.options.find((option) => option.isCorrect);
                if(correctOption?.value === q.answer){
                    return {...q , isAnswerCorrect: true};
                }else{
                    return {...q , isAnswerCorrect: false};
                }
            })  
            const quiz = {...this.quiz , questions};
            this.router.navigate(['/result'] ,{ state: {quiz}});
        }
        else 
        {
        const questions = this.questions.map((q) => {
            const correctOption = q.options.find((option) => option.isCorrect);
            if(correctOption?.value === q.answer){
                return {...q , isAnswerCorrect: true};
            }else{
                return {...q , isAnswerCorrect: false};
            }
        })  
        const quiz = {...this.quiz , questions};
        Swal.fire({
            title: 'confirmation' ,
            text: 'Are you sure you want to submit ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'yes',
            cancelButtonText: 'no'
            })
        .then((result: any) => { 
            if(result.value){
                Swal.fire({
                    text: 'Answers submitted successfully',

            })
                 this.router.navigate(['/result'] ,{ state: {quiz}});
            }
        })
        return 
     }
    }

    ngOnDestroy() {
        this.countDown = null;
      }
}


