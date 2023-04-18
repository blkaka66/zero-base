function solution(puzzle, word) {
    let wordArr=[...word];

    for(let i=0;i<puzzle.length;i++){
        for(let a=0;a<puzzle[i].length;a++){
            if(puzzle[i][a] === wordArr[0]){
                if(search(i,a,wordArr,puzzle) === true){
                    console.log("있다")
                    return true;
                }
            }
        }
    }
    console.log("없다")
    return false;
}

function search(i,a,wordArr,puzzle){
    let subject=[];
    if(i+1<puzzle.length){
        subject.push(puzzle[i+1][a]);
    }
    if(i-1>=0){
        subject.push(puzzle[i-1][a]);
    }
    if(a+1<puzzle[i].length){
        subject.push(puzzle[i][a+1]);
    }
    if(a-1>=0){
        subject.push(puzzle[i][a-1]);
    }
    console.log(subject)
    if(check(subject,wordArr) === true){

        return true;
    }
    else{

        return false;
    }
}

function check(subject,wordArr){
    let isIn=false;
    let usedIndex=[];
    let count=0;
    for(let i=1;i<wordArr.length;i++){
        for(let a=0;a<subject.length;a++){
            if(wordArr[i] === subject[a] ){
               isIn= isUsed(usedIndex,a);
               if(isIn === false){
                count++;
                usedIndex.push(a);
               }
            }
        }
    }
    if(count === wordArr.length-1){
        return true;
    }
}

function isUsed(usedIndex,a){
    let itIsused=false;
    for(let i=0;i<usedIndex;i++){
        if(usedIndex[i] === a){
            itIsused=true;
        }
    }
    return itIsused;
}

solution([["대", "한", "가", "나"], ["국", "민", "다", "라"], ["마", "바", "사", "아"], ["자", "차", "카", "타"]]
,"대한민국");