const doWorkCallBack=(callback)=>{
    setTimeout(()=>{
        callback('This is my error!', undefined)
    },2000)
}

doWorkCallBack((error, result)=>{
        if(error)
        {
            return console.log(error)
        }
        console.log(result)
})

// Promises

const doWorkPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([1,2,3])
        reject('Failure')
        
    }, 2000)

})


doWorkPromise.then((result)=>{
    console.log('Success!', result)
}).catch((error)=>{
    console.log(error)
})