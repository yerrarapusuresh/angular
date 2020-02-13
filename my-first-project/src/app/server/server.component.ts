import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent {
    serverNumber: number = 10;
    serverStatus: string = 'Offline';

    isAllowed:boolean = false;
    constructor(){
        setTimeout(() =>{
            this.isAllowed = true;
        }, 2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }
}