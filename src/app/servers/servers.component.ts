import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  onServerCreation = "no server added"
  serverName = 'Transport'
  serverCreated = false
  servers = ['server 1', 'server 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);

  }

  onCreateServer(){
    this.serverCreated = true
    this.servers.push(this.serverName)
    // this.onServerCreation = `server ${this.serverName} added successfully`
  };

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }




  ngOnInit(): void {
  }

}
