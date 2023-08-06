import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormatTimePipe } from './format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MainComponent,
    ResultComponent,
    PageNotFoundComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
