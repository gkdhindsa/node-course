const express = require('express')
require('./db/mongoose')

const UserRouter=require('./routers/user')
const TaskRouter=require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//     if(req.method==='GET')
//     {
//         res.send('Get requests are disabled')
//     }
//     else{
//         next()
//     }
// })\
//Maintenance
// app.use((req,res,next)=>{
//     res.status(503).send('The site is under maintenance ')
// })

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


