import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent {
    serverNumber: number = 10;
    serverStatus: string = ' Server is offline';
    serverName: string = "Hi There";


    isAllowed:boolean = false;
    constructor(){
        setTimeout(() =>{
            this.isAllowed = true;
        }, 2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }
    changeServerStatus() {
        this.serverStatus = "server is started";
    }

    updateServerName(event: Event){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}