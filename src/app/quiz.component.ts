// import { Template } from '@angular/compiler/src/render3/r3_ast'
// import { analyzeAndValidateNgModules } from '@angular/compiler'
// import {HttpClient} from '@angular/common/http'
import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent { 
    quiz:any = {}
    
    constructor (private api: ApiService){}
    ngOnInit(){
        this.api.quizSelected.subscribe(quiz => this.quiz= quiz)
    }
 
}