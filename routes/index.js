const route = require('express').Router();
const bodyParser= require('body-parser');
const Tasks=require('../database/db').Tasks


route.get('/', (req, res)=>{
Tasks.findAll()
    .then((todo_list)=>{
        res.status(200).send(todo_list)
        console.log(todo_list)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Error occured"
        })
    })
})
todos=[]

route.post('/task', (req, res)=>{
    console.log(req.body.data)
    todos.push({

        Title: req.body.title,
        Description: req.body.Description,
        Due_Date: req.body.Date,
        Status: req.body.Status,
        Priority: req.body.Priority

    })
    console.log(todos[0])
    Tasks.create({
        Title: req.body.title,
        Description: req.body.description,
        Due_Date: req.body.date,
        Status: req.body.status,
        Priority: req.body.priority
        

    }).then((todo_list)=>{
        res.status(201).send(todo_list)
    })
    .catch((err)=>{
        console.log(err);
        res.status(501).send({
            err: "Could not add TAsk"
            
        })
    
})
})
exports=module.exports={
    route
};