const Pool = require('pg').Pool
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: 'brotgluyslnnlp',
    host: 'ec2-3-224-164-189.compute-1.amazonaws.com',
    database: 'dc9csbmc8sj34i',
    password: '97dbd178990cb1288629545313dfcd355600381622eee74195050d8fb3859fa7',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

pool.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as threadthreadId id:');
});

module.exports = pool;