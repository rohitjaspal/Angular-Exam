import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isNil } from 'lodash';
import { UtilsService } from '../services/util.Service';
import { defaultQuiz } from '../schema/quiz';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  constructor(private readonly router: Router , private readonly utilservice: UtilsService)
  {
    localStorage.setItem('Quiz' , JSON.stringify(defaultQuiz));
  }

  startQuiz() {
    const quiz = this.utilservice.getQuiz();
    if(!isNil(quiz)){
      sessionStorage.setItem('myquiz' , JSON.stringify(quiz));
    }
  
    this.router.navigate(['/quiz']);
  }
}
