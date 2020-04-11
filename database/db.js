const Sequelize = require('sequelize');

const db = new Sequelize({

    dialect: 'sqlite',
  
    storage: __dirname + '/test.db',
  
  })

  const Tasks = db.define('todo_list', {

    id: {
  
      type: Sequelize.INTEGER,
  
      primaryKey: true,
  
      autoIncrement: true,
  
    },
  
   Title: {
  
      type: Sequelize.STRING(40),
  
      allowNull: false,
  
    },
  
    Description: {
  
      type: Sequelize.STRING
  
    },
    Due_Date: {
  
        type: Sequelize.DATE,
    
        
        allowNull: false,
    
      },
      Status: {
  
        type: Sequelize.STRING,
    
        defaultValue: "incomplete"
    
      },
      Priority: {
  
        type: Sequelize.STRING,
    
        defaultValue: "medium",
    
      },
  
  })
  
  console.log("successful")
  db.sync()

  .then(() => {

    console.log('db works')
  })
  module.exports = {
  
      db, Tasks
  
  }