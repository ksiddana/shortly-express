var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    // bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      if ( attemptedPassword === this.get('password') ) {
        callback(true);  
      } else {
        console.log(err);
      }

/*      if (!err){
        console.log('No error');
      }else {
       console.log(err); 
      }*/
      
    
  },
  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
  });

module.exports = User;