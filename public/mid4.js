function sum(arr){
    return arr.reduce((a,b)=>a+b)
}

function test_sum(callback){
    let randArr = []
    for(let i=0;i<5;i++){
        randArr.push(Math.floor(Math.random()*11))
    }
    console.log(randArr)
    console.log(callback(randArr))
}

for(let i=0;i<5;i++)    
    test_sum(sum)