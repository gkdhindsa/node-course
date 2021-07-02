const mongodb = require('mongodb') //require the module
// const MongoClient = mongodb.MongoClient //get the connection
// const ObjectID=mongo.ObjectID //object id

const {MongoClient, ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id=new ObjectID()
console.log(id.id)


//connect to mongo
MongoClient.connect(connectionURL, {
    urlNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    //created a db
    const db = client.db(databaseName)
    // db.collection('users').findOne({_id: new ObjectID("60df0e6d343b777d90eba2d6")}, (error , user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // //find returns a cursor and not the record itself

    // db.collection('users').find({age: 19}).toArray((error, users)=>{
      
    //     console.log(users)
    // })

    // db.collection('users').find({age: 19}).count((error, count)=>{
      
    //     console.log(count)
    // })


    db.collection('tasks').findOne({_id: ObjectID("60df0c87405f26790838e858")}, (error, task)=>{
        if(error)
        {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error, data)=>{

        console.log(data)
    })

})

