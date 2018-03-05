import { Component } from '@angular/core';
import { User, availableUsers } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  alt = 'Alternative';
  counter = 0;

  selectedUser: User;

  users: User[] = availableUsers;

  increment() {
    this.counter++;
  }

  select(user: User) {
    this.selectedUser = user;
  }
}
