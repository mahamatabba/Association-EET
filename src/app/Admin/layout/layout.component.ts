import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  openModal() {
   // console.log('Open modal');
  }
  closeModal() {
    //console.log('Close modal');
  }
  logout() {
    //console.log('Logout');
  }
  getIconPath(test : string) {
    //return 'assets/images/logo.png';
  }

 

}
