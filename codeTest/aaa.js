function solution(n) {
  let aCard=0;
  let bCard=0;
  let life=0;
  while(n.length>1){
    sortCard(n);

    aCard = pickCard(n);

    bCard = pickCard(n);
    console.log(aCard);
    console.log(bCard)
    life = compardCard(aCard,bCard);
    //console.log(life+"^^^")
    if(life > 0){
      n.push(life);
    }
  }
  console.log(n)
  if(n.length === 0){
    console.log(0)
  }
  else{
    console.log(n)
  }
  
};
function compardCard(aCard,bCard){
  let life=0;
  if(aCard === bCard){
    life=0;
  }
  else if(aCard>bCard){
    life=aCard-bCard;
  }
  else if(aCard < bCard){
    life=bCard-aCard;
  }
  return life;

};

function sortCard(cardArr){
  cardArr.sort(function(a,b) {return a-b;});
};

function pickCard(cardArr){
  let card=0;
  card=cardArr[cardArr.length-1];
  console.log(card+"%%%%");
  cardArr.pop();
  return card;
};

solution([4,8,6,1,2]);