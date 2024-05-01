const fs = require('fs');
const path = require('path');

const logMiddleWare = (req, res, next) => {
    const log = {
        time: new Date(),
        method: req.method,
        url: req.url
    }

    const logString = JSON.stringify(log, null, 2) + "\n";
    fs.appendFile(path.join(__dirname, '../logs/api.log'), logString, (err) => {
        if (err) {
            console.error('Error logging', err);
        }
    });
    next();
};

module.exports = logMiddleWare;