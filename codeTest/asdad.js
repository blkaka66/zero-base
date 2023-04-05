function solution(n) {
   
    let sum=0;
    let num=0;
    for(let i=0;i<n;i++){
        num=2**i;
        sum=sum+num;
    }
    sum=9999999999997;
   console.log(sum%1000000007);

}
solution(5);