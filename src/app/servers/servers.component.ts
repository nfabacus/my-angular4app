import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Hello';
  serverName2 ='Bye';
  username="";
  serverCreated = false;
  servers = ['test server 1', 'test server 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);  // Access the array of server (servers) and push the new serverName.
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;

  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset() {
    this.username ="";
  }

}
