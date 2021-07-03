const add=(a,b)=>{
    return new Promise((resolve, reject)=>[
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    ])
}

add(1,2).then((sum)=>{
    console.log(sum).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(r)
    })
    add(sum,5)
}).catch((e)=>{
    console.log(r)
})

add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum, 4)
}).then((sum2)=>{
    console.log(sum)
}).catch((e)=>{
    console.log(e)
})