import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';

public initalcount = 100;
public clicked = false;
public active = '' ;

public button_clicked() {
if (!this.clicked) {
  this.initalcount++;
  this.active = 'Liked';
  console.log( 'BUTTON CLICKED' );


} else {
  this.initalcount--;
  this.active = '';
  console.log( 'BUTTON UNCLICKED' );

}

this.clicked = !this.clicked;
}







}
