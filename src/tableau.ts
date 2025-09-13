let arr:any = [232, 884, 23, 5, 7];
let dkhol = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0 && arr[i] < 10) {
        arr[i] = 0;
        dkhol = true;
    }
}
if (dkhol) {
    console.log(arr);
}else console.log("nothing "); 
