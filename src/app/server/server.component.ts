import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.Component.html',
  styles: [`
    .onlineFontColor {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'offline' ? 'red': 'green';

  }
}
