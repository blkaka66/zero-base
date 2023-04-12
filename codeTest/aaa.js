function solution(p, s) {
    const question =[...p];
    const answer=s.split(' ');
    let usedChar=[];
    let isUsed=false;
    let used = [];
    for(let i=0;i<question.length;i++){
        for(let a=0;a<usedChar.length;a++)
        {
            if(usedChar[a] === question[i]){ //한번이라도 탐색한 글자면
                isUsed=true;
            }
        }
        if(isUsed === false){//탐색안했던 글자면
            usedChar.push(question[i]);
            let index = findIndex(question[i],question);
            let pass = findChar(index,answer,used);
            if(pass === false){
                console.log("끝")
                return false;
            }
        }
    
       isUsed=false;
    }
    console.log("통과")
    return true;
}
function findChar(index,answer,used){
    let pass = true;
    let target =answer[index[0]];
    console.log(target+"^^^");
    for(let i=0;i<index.length;i++){
        if(target !== answer[index[i]]){
           console.log("^^^")
            pass=false;
        }
    }
    for(let z=0;z<used.length;z++){
        if(target === used[z]){
            pass=false;
        }
    }
    used.push(target);
    return pass;
}

function findIndex(char,question){
    let index=[];
    for(let i=0;i<question.length;i++){
        if(question[i] === char){
            index.push(i);
        }
    }
    return index;
    
}
solution("가나다가","바나나 드래곤 가나 오염")