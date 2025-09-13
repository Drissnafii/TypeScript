interface Person {
    name: string,
    age:number     
}

let x: Person
x = {
    name: "Driss",
    age: 20,
}

type Mytype = {
    name: string,
    age?: number,
    married: boolean
}

let wx: Mytype 
wx = {
    name: "Driss Nafii",
    age: 19,
    married: false
}





console.log(wx.age);

const myNumber: number = wx.age ?? 0;

export enum BookingStatus {
    initial = "initial",
    paid = "paid",
    cancelled = "cancelled"
}

let bookingStatus:BookingStatus = BookingStatus.initial;

bookingStatus = BookingStatus.paid;

if (bookingStatus == BookingStatus.paid) {
     
}

interface ICar {
    model:string;
    year:number;

    sayHello: () => void;
};

class Car implements ICar {
    model:string;
    year:number;

    constructor(model:string, year:number) {
        this.model = model;
        this.year = year;
    }

    sayHello = () => {
        return "Hello";
    }
}

const myCar = new Car("BMW", 9999);
myCar.sayHello;