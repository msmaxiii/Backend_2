const express = require('express');
const cors = require('cors');
const ctrl = require('./controller');

const app = express();

app.use (express.json());
app.use (cors());


const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
} = require('./controller')


app.get('/api/house',ctrl.getHouses);
app.delete('/api/house/:id',ctrl.deleteHouse);
app.post('/api/house',ctrl.createHouse);
app.put('/api/house/:id',ctrl.updateHouse);


const PORT = 4005;
app.listen(PORT,()=>
console.log(`Listening on ${PORT}`))
