import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent {
  @Input() message:any;
  @Input() user:any;
  private selectedUser: any;
  displayModal: boolean = false;

  openReply(user: any) {
    console.log("reply clicked for ", user)
    this.selectedUser = user;
    // open modal box

    this.displayModal = true;

  }
}
