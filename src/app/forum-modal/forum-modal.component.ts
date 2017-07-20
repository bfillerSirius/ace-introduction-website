import { Component, Input } from '@angular/core';

@Component({
  selector: 'forum-modal',
  templateUrl: './forum-modal.component.html',
  styleUrls: ['./forum-modal.component.scss']
})
export class ForumModalComponent {
  @Input() message:any;

}
