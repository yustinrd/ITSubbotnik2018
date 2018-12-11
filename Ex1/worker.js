require('sqlite3'); //example injecting
const { iterationTimeout } = require('./helpers');

iterationTimeout({
    milliseconds: 1000,
    timeoutMilliseconds: 10,
});
