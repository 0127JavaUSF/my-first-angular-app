import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data = 'my-data';
  inputData = '';

  constructor() { }

  ngOnInit() {
  }

  receiveData(input: string) {
    console.log(input);
    this.inputData = input;
  }

}
