import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingservice.logStatusChanged(status)
  }

  statusUpdated = new EventEmitter<string>()
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingservice.logStatusChanged(status)
  }
  constructor(private loggingservice: LoggingService) { }
}
