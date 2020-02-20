import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = ['Abby', 'Billy'];
  userInput = '';

  constructor() {
    // setInterval(() => {
    //   this.userInput += 'AHH';
    // }, 2500);

  }

  ngOnInit() {
  }

  addPerson() {
    this.users.push(this.userInput);
    this.userInput = '';
  }

}
