const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'database-1.c9gljlz5nsgd.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '7378221aws',
    port: 5432,
});

client.connect()

const query = `SELECT * FROM CONTACT`

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    for (let row of res.rows) {
        console.log(row);
    }
});