const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'database-1.c9gljlz5nsgd.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '7378221aws',
    port: 5432,
});

client.connect()

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connection successful');
});

const queryCreate = `

    
`

client.query(queryCreate, (err, res) => {
    console.log(err, res)
   client.end() 
    if (err) {
        console.error(err);
        return;
    }

    console.log('Data insert successful');
});
