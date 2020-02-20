import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childData: string;

  @Output()
  myEvent = new EventEmitter<string>();

  inputText = '';

  sendData() {
    console.log('emitting event');
    this.myEvent.emit(this.inputText);
  }

}
