const w = () => {
    console.log("hello mr. trump");
    return ;15;
};

const v: (x:number, y:number) => number = (x, y) => {
    return x+y; 
}

let x:[string, number, boolean] = ["driss", 19, false]; // here this is a sequential ! 
let y:(string|number|boolean)[] = ["salma", false]; // and here is Union of those values =>string|number|boolean 
