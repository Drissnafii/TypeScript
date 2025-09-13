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
let wc: Mytype 

wx = {
    name: "Driss Nafii",
    age: 19,
    married: false
}





console.log(wx.age);


