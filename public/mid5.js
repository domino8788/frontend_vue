let arr = []

for(let i=0;i<5;i++){
    arr.push(Math.floor(Math.random()*100+1))
}
console.log(arr)
console.log(arr.map(value=>!(value%2)).reduce((a,b)=> a+b))
