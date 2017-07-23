import { Component, OnInit, Input, } from '@angular/core';
import {EMPLOYEES, DIRECTORS} from '../../assets/people'
import { Router, RouterModule } from '@angular/router';
// import {NgFor} from '@angular/'
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  myEmployees = EMPLOYEES;
  myDirectors = DIRECTORS;

  onselect(director:object): void {
    this.router.navigate(['/full-profile', director]);
    console.log(director)

  }

  onselectStudents(employee:object): void {
    this.router.navigate(['/full-profile', employee]);
    console.log(employee)
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
