import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'app';
  alt = 'Alternative';
  counter = 0;

  selectedUser: User;

  users: User[] = [];

  constructor(private usersService: UsersService) {}

  increment() {
    this.counter++;
  }

  select(user: User) {
    this.selectedUser = user;
  }

  ngOnInit() {
    this.usersService
    .getUsers()
    .subscribe(
      results => this.users = results
    );
  }

}
