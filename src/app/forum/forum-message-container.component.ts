import { Component, Input } from '@angular/core';

@Component({
  selector: 'forum-message-container',
  templateUrl: './forum-message-container.component.html',
  styleUrls: ['./forum-message-container.component.scss']
})
export class ForumMessageContainerComponent {

  @Input() open: any;
  openForumModal(): void{
    console.log("div opened")
    this.open = true;
  }
}
