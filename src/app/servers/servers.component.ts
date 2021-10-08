import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  onServerCreation = "no server added"
  serverName = ''

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);

  }

  onCreateServer(){
    this.onServerCreation = "server added successfully"
  };

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
