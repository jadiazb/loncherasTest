const express = require('express');

const app = express();

app.use(express.static('./dist/loncheras'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/loncheras/'}),
);

app.listen(process.env.PORT || 8080);