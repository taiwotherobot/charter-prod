const pgtools = require('pgtools');

const config = {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: '5432'
}

pgtools.createdb(config, 'charter', (err, res) => {
    if (err) {
        console.log(err.message);
    }
    console.log(res);
});

