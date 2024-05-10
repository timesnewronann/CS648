import { MongoClient } from "mongodb";
import {} from 'dotenv/config'

// CONNECT TO DATABASE
MongoClient.connect(process.env.DB, (err, client) => {
    if (err) {
        console.error("Failed to connect to the database:", err);
        return;
    }
    console.log('Connected to database ...');

    const db = client.db('vectacorp');  // Access the database

    let employee = {
        name: 'Ronan Borja',
        extension: 1111,
        email: 'ronan@vectacorp.com',
        title: 'Administrative Assistant',
        dateHired: Date.now(),
        currentlyEmployed: true,
    };

    db.collection('employees').insertOne(employee, (err, res) => {
        if (err) {
            console.error("Failed to insert document:", err);
            return;
        }
        console.log('1 document inserted.');
        client.close();  // Ensure connection is closed after operation
    });
});
