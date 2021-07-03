require('../src/db/mongoose')
const Task=require('../src/models/task')

Task.findByIdAndDelete('60e0461e13a019742c989620').then((res)=>{
    console.log(res)
    return Task.countDocuments()
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const deleteTaskAndCount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments()

    return count
}

deleteTaskAndCount('60e02bb2ba2f6178a896a92d').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})