import { Injectable } from '@angular/core';
import { CounterUserService } from './counter-user.service';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.incrementInactiveToActive()
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.incrementActiveToInactive()
  }

  constructor(private counter : CounterUserService) { }
}
