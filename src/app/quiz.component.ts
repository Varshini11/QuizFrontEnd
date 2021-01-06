import { Template } from '@angular/compiler/src/render3/r3_ast'
import { analyzeAndValidateNgModules } from '@angular/compiler'
import { Component } from '@angular/core'
import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http'
@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent { 
    quiz= {}
    
    constructor (private api: ApiService){}
    ngOnInit(){
        this.api.quizSelected.subscribe(quiz => this.quiz= quiz)
    }
 
}