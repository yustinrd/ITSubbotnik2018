const moment = require('moment');

const values = {
    milliseconds: 20,
    timeoutMilliseconds: 10,
};

function test(count = 100000000) {
    for (var i = 0; i < count; i++) {
        const x = {
            y: Math.ceil(i) + 'sdsfjdlfjlkMNFONnsdno'.slice(4, (Math.random() * 20) | 0)
        };
        eval('(' + JSON.stringify(x) + ')');
    }
}

function iterationTimeout({
    round = 0,
    dateStart = Date.now(),
    cb = () => test(10),
    milliseconds,
    timeoutMilliseconds,
}) {
    const startDate = Date.now();
    console.log('iterationTimeout', startDate, moment(startDate).format('mm:ss SSS'));
    while (Date.now() - startDate < (milliseconds || values.milliseconds)) {
        cb();
    }

    setTimeout(() => {
        iterationTimeout({  round: round + 1, dateStart, milliseconds, timeoutMilliseconds });
    }, timeoutMilliseconds || values.timeoutMilliseconds);
}

module.exports = {
    values,
    iterationTimeout,
    test,
};
