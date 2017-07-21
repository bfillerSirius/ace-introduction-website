import { Component, OnInit, Input, } from '@angular/core';
import {EMPLOYEES, DIRECTORS} from '../../assets/people'
// import {NgFor} from '@angular/'
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  myEmployees = EMPLOYEES;
  myDirectors =DIRECTORS;

  constructor() { }

  ngOnInit() {
  }

}
