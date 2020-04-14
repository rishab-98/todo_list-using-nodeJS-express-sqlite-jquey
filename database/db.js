const Sequelize = require('sequelize');

const db = new Sequelize({

    dialect: 'sqlite',
  
    storage: __dirname + '/final.db',
  
  })

  const Tasks = db.define('task_list', {

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
  
      type: Sequelize.STRING,
  

  
    },
    Notes:{
        type: Sequelize.TEXT
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
    
   
    
      },
  
  })
  
  module.exports = {
  
      db, Tasks
  
  }