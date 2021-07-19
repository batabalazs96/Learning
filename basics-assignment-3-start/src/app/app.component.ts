import { Component } from '@angular/core';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  clickDates = []

  toggle() {
    this.show = !this.show;
    this.clickDates.push(this.clickDates.length + 1);
  }
}
