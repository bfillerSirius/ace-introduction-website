import { Component, Input } from '@angular/core';

@Component({
  selector: 'forum-message-container',
  templateUrl: './forum-message-container.component.html',
  styleUrls: ['./forum-message-container.component.scss']
})
export class ForumMessageContainerComponent {

  QUESTIONS = [
    {userID: 1, name: "Jen", question: "How is life at Sirius?"},
    {userID: 2, name: "Chris", question: "What does Sirius do?"},
    {userID: 1, name: "Jen", question: "What are the benefits of working at Sirius?"},
    {userID: 3, name: "Braden", question: "Is there anything fun to do around there?"},
    {userID: 5, name: "Will", question: "Are the people there easy to get along with?"},
    {userID: 5, name: "Will", question: "How is the commute to work?"}
  ];


  @Input() open: any;
  openForumModal(): void{
    console.log("div opened")
    this.open = true;
  }
}
