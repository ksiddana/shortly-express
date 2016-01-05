var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
// var bookshelf = require('bookshelf')(knex);

var User = db.Model.extend({ tableName: 'users' });

module.exports = User;