const express = require('express')
const app = express()
const port= process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())
const course = require('./data/course.json');
const courseDetails= require('./data/courseDetails.json');

app.get('/', (req, res) =>{
    res.send('Server api is running');
});

app.get('/course', (req, res) =>{
    res.send(course);
});

app.get('/courseDetails', (req, res) =>{
    res.send(courseDetails);
    
});

app.get('/courseDetails/:id', (req, res) =>{
    // res.send(courseDetails);
    const id= req.params.id;
    const selectCourse= courseDetails.find(c=> c.id === id);
    res.send(selectCourse);
});

app.listen(port, ()=>{
    console.log('Course server is running at port',port);
});