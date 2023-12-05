const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

app.get('/', (req,res) =>{
    res.send('Hello World!');
});

app.get('/api/signup', (req, res) => {
    const filePath = path.join(__dirname, 'signup.html');
    res.sendFile(filePath);
});

https.createServer(options, app).listen(PORT, ()=> {
    console.log(`Server running on https://localhost:${PORT}`);
});
