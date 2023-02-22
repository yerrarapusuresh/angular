import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Room, RoomList } from './Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChild('numberOfRooms') title!: ElementRef;

  hotelName: String = 'Taj Hotel';
  numberOfRooms: number = 10;
  toggle: boolean = false;

  room: Room = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 20
  };

  roomList: RoomList[] = [
    {
      roomId: 1,
      roomType: "King",
      amanities: "TV, Fridge, Washing Machine",
      price: 1000,
      photos: "https://unsplash.com/photos/X5UrOwSCYYI",
      checkInTime: new Date('01-02-2023'),
      checkOutTime: new Date('01-02-203')
    },
    {
      roomId: 2,
      roomType: "King Plus",
      amanities: "TV, Fridge, Washing Machine",
      price: 1000,
      photos: "https://unsplash.com/photos/X5UrOwSCYYI",
      checkInTime: new Date('01-02-2023'),
      checkOutTime: new Date('01-02-203')
    },
    {
      roomId: 3,
      roomType: "King",
      amanities: "TV, Fridge, Washing Machine",
      price: 1000,
      photos: "https://unsplash.com/photos/X5UrOwSCYYI",
      checkInTime: new Date('01-02-2023'),
      checkOutTime: new Date('01-02-203')
    },
    {
      roomId: 4,
      roomType: "King",
      amanities: "TV, Fridge, Washing Machine",
      price: 1000,
      photos: "https://unsplash.com/photos/X5UrOwSCYYI",
      checkInTime: new Date('01-02-2023'),
      checkOutTime: new Date('01-02-203')
    }];

  constructor() {

  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Hilton Hotels";
    this.title.nativeElement.innerText = this.numberOfRooms;
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
  }
  toggleFunc() {
    this.toggle = !this.toggle;
    this.roomList = [...this.roomList, this.roomList[0]];
  }
  selectedRoom($event: any) {
    console.log("parent function", $event, "parent function");
  }
}
