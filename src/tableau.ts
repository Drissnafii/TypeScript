let arr:any = [232, 884, 23, 5, 7];
let pair:any = [];
let impair:any = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        pair.push(arr[i]);
    } else {
        impair.push(arr[i]);
    }
}

console.log(pair);
console.log(impair);