import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// Connect to database
MongoClient.connect(process.env.DB, (err,database) => {
    if (err) throw err
    console.log('Connected to database...')

    let employee = {
        name: 'Ronan Borja',
        extension: 1111,
        email: 'ronan@vectacorp.com',
        title: 'Administrative Assistant',
        dateHired: Date.now(),
        currentlyEmployed: true,
    };

    database
        .db('vectacorp')
        .collection('employees')
        .insertOne(employee, (err, res) => {
            if (err) throw err
            console.log('I document inserted.')
            database.close()
        })
})
