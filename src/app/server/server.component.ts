import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.Component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  getServerStatus(){
    return this.serverStatus;
  }
}
