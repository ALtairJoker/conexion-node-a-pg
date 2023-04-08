const { Pool } = require('pg');

const pool = new Pool(
                      {
                        host: 'localhost',
                        user: 'likeme',
                        password: '123456',
                        database: 'likeme',
                        allowExitOnIdle: true
                      }
);

module.exports = pool;