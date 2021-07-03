require('../src/db/mongoose')
const User=require('../src/models/user')


//60e02f019543166da4fac70fObjectId("")

// User.findByIdAndUpdate('60e02f019543166da4fac70f', {age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount=async(id, age)=>{
    const user=await User.findByIdAndUpdate(id, {age})
    const count=await User.countDocuments({age})

    return count
}

updateAgeAndCount('60e02f019543166da4fac70f',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})