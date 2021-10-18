import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { canComponentDeactivate } from './can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,  canComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false
  isChangeSaved = false

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    this.route.queryParams.subscribe(
      (queryParams : Params) =>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
        console.log(this.allowEdit)
      }
    )
    this.route.fragment.subscribe()
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isChangeSaved = true
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.isChangeSaved){
      return confirm('Do you want to Discard Changes')
    }
    else{
      return true
    }
  }

}
