import { Component, OnInit } from '@angular/core';
import {EMPLOYEES, DIRECTORS} from '../../assets/people';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';





@Component({
  selector: 'app-full-profile',
  templateUrl: './full-profile.component.html',
  styleUrls: ['./full-profile.component.scss']
})
export class FullProfileComponent implements OnInit {
name;
position;
img;
bio;
email;
coverPhoto;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: Params) => {
        this.name = params['name'];
        this.position = params['position'];
        this.img = params['largeImg'];
        this.bio = params['bio'];
        this.email = params['email'];
        this.coverPhoto = params['coverPhoto'];
      });
   }

}
