import { Component, Input, OnInit } from '@angular/core';
import {QuestionsService} from '../services/questions.service';

@Component({
  selector: 'forum-modal',
  templateUrl: './forum-modal.component.html',
  styleUrls: ['./forum-modal.component.scss']
})
export class ForumModalComponent {
  @Input() message:any;
  @Input() user:any;
  @Input() index: number;
  users: any[] = [];
  private selectedUser: any;
  newArray: any[];
  temp:any;

  constructor(private questionsObj: QuestionsService) {}

  ngOnInit() {
    this.selectedUser = this.user;
  }


  remove(){
    this.selectedUser = null;
  }

  addResponse(){

    this.newArray = this.questionsObj.getQuestions();

    this.temp = (<HTMLInputElement>document.getElementById("responseID")).value;
    this.newArray[this.index].responses.push(this.temp);
    this.questionsObj.setQuestions(this.newArray);
    this.remove();
    // console.log(this.questionsObj.display, "from modal")
  }

}
