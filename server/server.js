const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../built')));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'built/index.html'));
});

app.listen(3001, function () {
    console.log('Listening on port 3001!')
});


