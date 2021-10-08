import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false
  // onServerCreation = "no server added"
  // serverName = 'Transport'

  // constructor() { 
  //   setTimeout(() => {
  //     this.allowNewServer = true
  //   }, 2000);

  // }

  // onCreateServer(){
  //   this.onServerCreation = `server ${this.serverName} added successfully`
  // };

  // onUpdateServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value
  // }


  allowInputTag = false
  prefixValue = "My Name is "
  name = "Vishal"


  enableInput(){
    this.allowInputTag = true

  }

  onSubmit(){

  }

  ngOnInit(): void {
  }

}
