const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Express here!");
})

app.listen(3001, () => {
    console.log("Express is istening on port 3001");
})

//continue watching this https://www.youtube.com/watch?v=HjJq1pHxTp4