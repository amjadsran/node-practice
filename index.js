const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'Employee';
const client = new MongoClient(url);

async function getdata() {
    let Result = await client.connect();
    let db = Result.db(database);
    let collection = db.collection('digital data');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getdata();