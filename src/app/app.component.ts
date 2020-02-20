import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  something = false;

  constructor() {
    // setInterval(() => {
    //   this.something = !this.something;
    // }, 1000);
  }

  invert() {
    this.something = !this.something;
  }
}
