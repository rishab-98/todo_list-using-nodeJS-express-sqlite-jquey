const route = require('express').Router();
const bodyParser= require('body-parser');
const Tasks=require('../database/db').Tasks


route.get('/', (req, res)=>{
Tasks.findAll()
    .then((todo_list)=>{
        res.status(200).send(todo_list)
    
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Error occured"
        })
    })
})
todos=[]

route.post('/', (req, res)=>{
    console.log(todos[0])
    Tasks.create({
        Title: req.body.title,
        Description: req.body.description,
        Due_Date: req.body.date,
        Status: "Incomplete",
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

route.get('/:id', (req, res) => {
    if (isNaN(Number(req.params.id))) {

        return res.status(400).send({

            error: 'todo id must be an integer'

        })

    }
  
    Tasks.findByPk(req.params.id)
    .then( (todo_list) => {
    res.status(201).send(todo_list)
    }) .catch((err)=>{
        console.log(err);
        res.status(501).send({
            err: "Could not get task by given id"
            
        })
    })
  
})

route.patch('/:id', function (req, res, next) {
    Tasks.update(
      {  Due_Date: req.body.date,
        Status: req.body.status,
        Priority: req.body.priority},

      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
   })

   route.get('/:id/notes', function (req, res) {
   Tasks.findAll({
    where: {
        id: req.params.id //array
    },
    attributes: ['notes'], //object
}).then(function (list) {
    res.status(200).json(list);
})
   })

   route.patch('/:id/notes', function (req, res, next) {
    Tasks.update(
      {  Notes: req.body.notes,
    },

      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
   })

exports=module.exports={
    route
};