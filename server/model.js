const sqlDb = require('../db/database.js');
//For Mongo
//const mongoDb = require('../../db/mongodb')

module.exports = {

  //build a query
  getRestaurantFromDb: (id, callback) => {
    var queryStr = `select * from restaurant where id=${id}`;
    sqlDb.query(queryStr, (err, results) => {
      console.log(JSON.parse(JSON.stringify(results)));
      //callback(err, results);
    });
  },
  getImagesFromDb: (id, callback) => {
    var queryStr = `select * from Images where restaurant_id=${id}`;
    sqlDb.query(queryStr, (err, results) => {
      results = (JSON.parse(JSON.stringify(results)));
      var arr = [];
      for (var i = 0; i < results.length; i++) {
        arr.push(results[i].url);
      }
      callback(err, arr);
    });
  }
};