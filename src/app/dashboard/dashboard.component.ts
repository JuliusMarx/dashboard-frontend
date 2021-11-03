import {Component, Input, OnInit} from '@angular/core';
import { UsersService } from "../_service/users.service";
import { Users } from "../_model/users.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() users: any;

  constructor (private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(users => this.users = users);
  }
}
