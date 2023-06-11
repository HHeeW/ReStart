function solution(park, routes) {
    let start = [];
    let place = []

    park.forEach((e,i)=>{
        let value = e.split("")
        place.push(value)
        value.forEach((f,j)=>{
            if(f === "S"){
                start = [i,j]
            }
        })
    });
    routes.some((e,i)=>{
        let state = false
        let move = e.split("")
        // console.log(start)
       for(i=1;i<=move[2];i++){
            switch(move[0]){
                case "E":
                    if(place[start[0]][start[1]+i] != 'X'&& start[1]+i < place[0].length){
                        if(i == move[2]){start[1] += i;}
                    } else{state = true;}
                    break;
                case "W":
                    if(place[start[0]][start[1]-i] != 'X'&& start[1]-i >= 0){
                        if(i == move[2]){start[1]  -= i}
                    }else{state = true;}
                    break;
                case "S":
                    console.log(place[start[0]+i][start[1]])
                    if(place[start[0]+i] [start[1]] != 'X'&& start[0]+i < place.length){
                        if(i == move[2]){start[0] += i}
                    }else{state = true;}
                    break;
                case "N":
                    if(place[start[0]-i][start[1]] != 'X'&& start[0]-i >= 0){
                        if(i == move[2]){start[0]  -= i}
                    }else{state = true;}
                    break;
            }
            if(state){break;}
        }
        if(state){true;}
    })
    console.log(start)
    return start;
}
solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])