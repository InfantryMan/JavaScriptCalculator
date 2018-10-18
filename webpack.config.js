const path = require('path');

module.exports = {
    entry: './scripts/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
