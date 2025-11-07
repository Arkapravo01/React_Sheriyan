const limit=20;

const isPrime=(num)=>{
    let c=0;
    if(num<2) return false
    for(let i=1;i<=num;i++){
        if(num%i===0){
            c+=1
        }
    }
    return c===2
}

const countPrimes=(limit)=>{
    for(let i=0;i<=limit;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

countPrimes(20);