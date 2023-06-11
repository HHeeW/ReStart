const a = 3;
let b = "";

for(let i = 1; i<= a; i++){
    for(let j = a; j > i; j-- ){
        b += (" ");
        }
    for(let k = 1; k<i*2; k++){
        b += ("*");
    }
    b += ("\n");
}
console.log(b);