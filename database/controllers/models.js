const db = require('../server.ts');

const modelHelpers = {
    getAll: (callback) => {
        let queryString = 'SELECT * FROM Restaurants;'
        db.query(queryString, (err, results) => {
            if (err){ // TODO: use async await instead of error callbacks
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    create: (body, callback) => {
            let queryString = `INSERT INTO Restaurants(restaurant) VALUES('${body.restaurant}');`
            db.query(queryString, (err, results) => {
                if (err){
                    callback(err)
                } else {
                    callback(null, results)
                }
            })
    },
    deleteAll: (callback) => {
       let queryString = `TRUNCATE table Restaurants;`
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    deleteOne: (id, callback) => {
        let queryString = `DELETE FROM Restaurants WHERE id = ${id};` // we want to delete one item from the database with this provided id
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    }
};


module.exports = modelHelpers;