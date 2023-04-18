const Sequelize = require('sequelize')

const sequelize = new Sequelize('praneethdb','root','Praneeth@135',
{dialect:'mysql',host:'localhost'})

 module.exports=sequelize