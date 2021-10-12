import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ManageUserService } from '../manage-user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  
  constructor(private manage: ManageUserService){}


  ngOnInit(){
    this.users = this.manage.inactiveUsers
  }
  onSetToActive(id: number) {
      this.manage.setToActive(id)
  }
}
