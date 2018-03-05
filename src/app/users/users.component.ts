import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  selectedUserForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    this.selectedUserForm = this.fb.group({
      username: ['', [Validators.required]],
      email: [''],
      fullName: [''],
      age: [0]
    });
  }

  increment() {
    this.counter++;
  }

  select(user: User) {
    this.selectedUser = user;
    const {username, fullName, email, age} = user;
    this.selectedUserForm.setValue({
      username, fullName, email, age
    });
  }

  ngOnInit() {
    this.usersService
    .getUsers()
    .subscribe(
      results => this.users = results
    );
  }

}
