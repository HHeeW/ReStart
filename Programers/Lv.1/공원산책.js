function solution(park, routes) {
    var answer = [];
    let start = [];
    let place = new Array();
    park.forEach((e,i)=>{
        // console.log(e)
        e.split("").forEach((f,j)=>{
            // console.log(f)
            // console.log(j)
            
            place[i][j] = f
        });
    })
    console.log(place)
    return answer;
}
solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])