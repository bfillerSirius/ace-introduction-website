import { Component, Input } from '@angular/core';

@Component({
  selector: 'forum-modal',
  templateUrl: './forum-question-modal.component.html',
  styleUrls: ['./forum-question-modal.component.scss']
})
export class ForumQuestionModalComponent {
  @Input() message:any;
}
