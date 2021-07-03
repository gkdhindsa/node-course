const add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

const doWork=async()=>{
    const sum=await add(1,99)
    const sum1=await(sum, 50)
    const sum3=await(sum1, 89)
    return sum3
}


doWork().then((result)=>{
    console.log('result: ', result)
}).catch((e)=>{
    console.log('Error: ', e)
})