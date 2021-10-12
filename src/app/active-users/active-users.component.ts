import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ManageUserService } from '../manage-user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
   users: string[];
 
  constructor(private manage : ManageUserService){
  
  }

  ngOnInit(){

    this.users = this.manage.activeUsers
  }
  onSetToInactive(id: number) {
    this.manage.setToInactive(id)
  } 
}
