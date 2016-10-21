/**
* Database Configuration
**/
"use strict";
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var migrations = require(__base + '/Migrations/');
var env       = process.env.NODE_ENV || "dev";
var config    = require(path.join(__dirname, '..', 'config', 'config.js')).database[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config.options);
var db        = {};

fs.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    sequelize
    .sync()
    .then(function() {
      migrations.init(sequelize);
    });
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = db;