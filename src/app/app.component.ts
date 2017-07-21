import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  openNav(){
  document.getElementById('sideNavBar').style.width ="180px"
  document.getElementById('sideNavBar').style.borderRight ="solid 1px #ffa000"
}
closeNav(){
  document.getElementById('sideNavBar').style.width ="0"
  document.getElementById('sideNavBar').style.borderRight ="none"

}
}
