import { Component, Input } from '@angular/core';

@Component({
  selector: 'forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent {
  @Input() message:any;

}
