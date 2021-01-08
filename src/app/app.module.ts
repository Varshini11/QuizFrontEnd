import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms' ;
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent} from './question.component';
import { ApiService } from './api.service';
import{QuestionsComponent} from './questions.component';
import {HomeComponent} from './home.component';
import {NavComponent} from './nav.component';
import {QuizComponent} from './quiz.component'
import {QuizzesComponent} from './quizzes.component'
//import {RegisterComponent} from './register.component'
import { AppRoutingModule } from './app-routing.module';
const routes =[
  {path: '', component:HomeComponent},
  {path: 'question', component:QuestionComponent},
  {path: 'question/:quizId', component:QuestionComponent},
  {path: 'quiz', component:QuizComponent}
]
@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent, 
    HomeComponent, NavComponent,QuizComponent,QuizzesComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,RouterModule.forRoot(routes),
    FormsModule,BrowserAnimationsModule,
    MatInputModule, MatCardModule, MatSliderModule,MatButtonModule,
    MatListModule, MatToolbarModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
