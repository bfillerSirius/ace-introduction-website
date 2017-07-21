import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'forum-modal',
  templateUrl: './forum-modal.component.html',
  styleUrls: ['./forum-modal.component.scss']
})
export class ForumModalComponent {
  @Input() message:any;
  @Input() user:any;
  users: any[] = [];
  private selectedUser: any;


  ngOnInit() {
    this.selectedUser = this.user;
  }

  onSelect(user: any): void{
    this.selectedUser = user;
  }

  remove(){
    this.selectedUser = null;
  }

}
