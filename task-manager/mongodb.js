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

        db.collection('users').deleteMany({
            age: 90
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
})

