function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach((a)=>{
        let value = 0;
        a.forEach((e)=>{
            name.forEach((val, i)=>{
                if(val == e){
                    value += yearning[i]
                }
            })
        })
        answer.push(value)
    })
    console.log(answer)
    return answer;
}

solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3] ,
    [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])