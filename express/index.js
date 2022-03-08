const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json())

const courses = [
    {
        id:1 , name :'Chiranjeev'
    },
    {
        id:2 , name : 'CHIRRU'
    },
    {
        id:3 , name : 'Albin'
    },
    {
        id:4 , name : 'Apple'
    }
]

app.get('/',(req, res) => {
    res.send('HELLO WORLD!!!');
});

app.get('/api/chirru',(req,res)=>{
    res.send(courses);
}
)
app.get('/api/chirru/:id',(req,res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id))
   if (!course) res.status(404).send('The course with the given ID was not found')
   res.send(course)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port : '+port+'...'))

app.post('/api/courses',(req,res) => {
    if(!req.body.name || req.body.name.length <3){
        // 400 Bad req
        res.status(400).send("Name is required and should be min 3 characters")
        return 
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course)
    res.send(courses)
})
