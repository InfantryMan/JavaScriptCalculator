'use strict';

const http = require('http');
const fs = require('fs');
const config = require('./config');
const mime = require('mime-types');
const url = require("url");

module.exports = http.createServer((req, res) => {
    let pathName = decodeURI(url.parse(req.url).pathname);
    if (req.method === 'GET') {
        if (pathName === '/') {
            sendFile(config.root + '/index.html', res);
        } else {
            sendFile(config.root + pathName, res);
        }
    }
});

function sendFile(filePath, res) {
    let fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream
        .on('error', err => {
            if (err.code === 'ENOENT') {
                res.statusCode = 404;
                res.end('Not found');
            } else {
                console.error(err);
                if (!res.headersSent) {
                    res.statusCode = 500;
                    res.end('Internal error');
                } else {
                    res.end();
                }
            }
        })
        .on('open', () => {
            res.setHeader('Content-Type', mime.lookup(filePath));
        });

    res
        .on('close', () => {
            fileStream.destroy();
        });
}