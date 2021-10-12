import { Component} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 
})
export class NewAccountComponent {


  constructor(private loggingService : LoggingService, private accountservice : AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChanged(accountStatus)
  }
}
