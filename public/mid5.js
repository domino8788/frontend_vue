let arr = []

for(let i=0;i<5;i++){
    arr.push(Math.floor(Math.random()*100+1))
}

console.log(arr.reduce((a,b)=> (a%2==0?a:0)+(b%2==0?b:0)))
