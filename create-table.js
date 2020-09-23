const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'database-1.c9gljlz5nsgd.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '7378221aws',
    port: 5432,
});

client.connect()

const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`

client.query(query, (err, res) => {
    console.log(err, res)
    client.end()
});