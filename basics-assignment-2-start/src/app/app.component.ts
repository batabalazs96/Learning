import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  isEmpty() {
    if (this.username == null) {
      return false;
    } else {
      return true;
    }
  }
  clearUsername() {
    this.username = null;
  }
}

