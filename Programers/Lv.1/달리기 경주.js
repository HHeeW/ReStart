function solution(players, callings) {
    let answer = new Array();
    let tem
    players.forEach((e, i)=>{
        answer[e] = i;
    });
    callings.forEach(function(e){
        tem = players[answer[e]];
        players[answer[e]] = players[answer[e]-1];
        players[answer[e]-1] = tem;
        tem = answer[e];
        answer[players[tem]] = tem
        answer[players[tem-1]] = tem-1
    })
    return players
}
console.log(solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
))