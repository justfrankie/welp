const db = require('./server.ts');

const modelHelpers = {
    getAll: (callback) => {
        let queryString = 'SELECT * FROM choices;'
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    addOne: (data, callback) => {
        let {restaurant} = data
            let queryString = `INSERT INTO choices(restaurant) VALUES('${restaurant}');`
            db.query(queryString, (err, results) => {
                if (err){
                    callback(err)
                } else {
                    callback(null, results)
                }
            })
    },
    deleteAll: (callback) => {
       let queryString = `TRUNCATE table choices;`
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    deleteOne: (id, callback) => {
        let queryString = `DELETE FROM choices WHERE id = ${id};` // we want to delete one item from the database with this provided id
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