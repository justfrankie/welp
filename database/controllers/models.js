const db = require('../server.ts');

const modelHelpers = {
    getAll: (callback) => {
        const queryString = 'SELECT * FROM Restaurants;'
        db.query(queryString, (err, results) => {
            if (err){ // TODO: use async await instead of error callbacks
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    create: (body, callback) => {
            const queryString = `INSERT INTO Restaurants(restaurant) VALUES(?);`
            db.query(queryString, [body.restaurant], (err, results) => {
                if (err){
                    callback(err)
                } else {
                    callback(null, results)
                }
            })
    },
    deleteAll: (callback) => {
       const queryString = `TRUNCATE table Restaurants;`
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    deleteOne: (id, callback) => {
        const queryString = `DELETE FROM Restaurants WHERE id=?;`
        db.query(queryString, [id], (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    update: (id, payload, callback) => {
        try {
            const queryString = `UPDATE Restaurants set restaurant= ? WHERE id =?;`
            db.query(queryString, [payload, id], (err, results) => {
            })
            callback(null, results)
        } catch (error) {
            callback(err)
        }
    }
};


module.exports = modelHelpers;