let a = 3, b = 1;
solution(a,b);


function solution(a, b) {
    var answer = 0;
    if(a < b){
        for(i = a; i <= b; i++){
            answer += i;
        }
    }
    else{
        for(i = b; i <= a; i++){
            answer += i;
        }
    }
    console.log(answer);

}