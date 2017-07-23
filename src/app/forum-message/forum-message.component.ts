import { Component, Input, OnInit } from '@angular/core';
import {QuestionsService} from '../services/questions.service';

@Component({
  selector: 'forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})

export class ForumMessageComponent {
  @Input() message:any;
  @Input() user:any;
  @Input() responses: any;
  @Input() index: number;
  private selectedUser: any;
  displayModal: boolean = true;
  constructor(private questionObj:QuestionsService){
    this.displayModal = this.questionObj.getDisplay();

  }

  openReply(user: any) {
    console.log("reply clicked for ", user)
    this.selectedUser = user;
    // open modal box
    this.questionObj.switchDisplay();

    this.displayModal = this.questionObj.getDisplay();

    console.log(this.displayModal, " bool from fm")

    // console.log(this.displayModal, "from fm when opened");
  }


}
