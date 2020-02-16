import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  userName : string = "";
  disableButton:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  catchInput(event: Event){
   this.userName = (<HTMLInputElement>event.target).value;
   console.log(this.userName.length);
   if(this.userName.length > 0){
     this.disableButton = false;
   }
   else {
     this.disableButton = true;
   }
  }

  resetUserName(){
    this.userName = "";
    this.disableButton = true;
    console.log("Reset is called");
  }

}
