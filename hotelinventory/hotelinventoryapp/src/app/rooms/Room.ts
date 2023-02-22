export interface Room {
    totalRooms:number,
    availableRooms:number,
    bookedRooms:number
}


export interface RoomList {
    roomId: number;
    roomType: string;
    amanities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}