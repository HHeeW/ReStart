let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 3;
let answer= [];

function solution(b, a){
    for(i of b){
        if((i % a) == 0){
            answer.push(i);
        }
    }
    console.log(answer);
}

solution(arr, a);