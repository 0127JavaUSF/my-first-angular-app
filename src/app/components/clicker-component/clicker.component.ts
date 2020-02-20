import { Component } from '@angular/core';


/*
 *  @Component is a decorator which is used to declare metadata
 associated with Angular components. By default it should declare
 a selector, and a template file, and will generally also include
 a stylesheet.  
 */
@Component({
    selector: 'app-clicker',
    templateUrl: './clicker.component.html',
    styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
    clicks = 0;

    processClicks(amount: number): void {
        this.clicks += amount;
    }
}