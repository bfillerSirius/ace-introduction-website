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
}
closeNav(){
  document.getElementById('sideNavBar').style.width ="0"

}
}
