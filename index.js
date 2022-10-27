const express = require('express')
const app = express()
const port= process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())
const course = require('./data/course.json');
app.get('/', (req, res) =>{
    res.send('Server api is running');
});

app.get('/course', (req, res) =>{
    res.send(course);
});

app.listen(port, ()=>{
    console.log('Course server is running at port',port);
});