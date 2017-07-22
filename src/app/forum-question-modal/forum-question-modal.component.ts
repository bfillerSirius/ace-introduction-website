import { Component, Input } from '@angular/core';
import {QuestionsService} from '../services/questions.service';

@Component({
  selector: 'forum-question-modal',
  templateUrl: './forum-question-modal.component.html',
  styleUrls: ['./forum-question-modal.component.scss']
})

export class ForumQuestionModalComponent {
  @Input() message:any;
  @Input() questions:any[];
  temp: any;
  @Input() display:boolean;
  constructor(private questionsObj: QuestionsService) {}


  remove(){
    this.questionsObj.switchQuestionInputDisplay();
    console.log(this.questionsObj.getQuestionInputDisplay(), "questions modal")
    this.display = this.questionsObj.getQuestionInputDisplay();
  }



  addQuestion(){
    this.display = true;
    this.temp = {questionID: 1, name: (<HTMLInputElement>document.getElementById("nameID")).value, userID: "2", question: (<HTMLInputElement>document.getElementById("questionID")).value, responses: []};
    this.questions.push(this.temp);
    this.questionsObj.setQuestions(this.questions);
    this.remove();
  }
}
