const { Client } = require('pg');

const client = new Client({
    database: 'db_ultravoucher',
    host: 'localhost',
    user: 'postgres',
    password: '123',
    port: 5432
});

client.connect();

client.query('SELECT p.id, p.name, parent.name AS parent_name FROM people p ' +
 'LEFT JOIN people parent ON p.parent_id = parent.id;', (err, res) => {
    if (err){
        console.error(err);
        return;
    }
    console.log(res.rows);
    client.end();
});
