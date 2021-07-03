const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User',{
//     name: {
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me=new User({
//     name: 'Nem', 
//     age: 19
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

const tasks=mongoose.model('tasks', {
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const washing=new tasks({
    description: 'Washing Clothes', 
    completed: 'false'})


washing.save().then(()=>{
    console.log(washing)
}).catch((error)=>{
    console.log('Error')
})