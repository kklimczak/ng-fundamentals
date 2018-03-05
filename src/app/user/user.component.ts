import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  @Output() select = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.select.emit(this.user);
  }

}
