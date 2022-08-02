const db = require('../server.ts');

const modelHelpers = {
    getAll: async (callback) => {
        const queryString = 'SELECT * FROM Restaurants;'
        await db.query(queryString, (err, result) => {
            if (err) callback({status: 500, message: "Internal Server Error"});
            callback(null, result)
        })
    },
    create: async (body, callback) => {
            const queryString = `INSERT INTO Restaurants(restaurant) VALUES(?);`
           await db.query(queryString, [body.restaurant], (err, result) => {
                if (err) callback({status: 500, message: "Internal Server Error"});
                callback(null, result)
            })
    },
    deleteAll: async (callback) => {
       const queryString = `TRUNCATE table Restaurants;`
        await db.query(queryString, (err, result) => {
            if (err) callback({status: 500, message: "Internal Server Error"});
            callback(null, result)
        })
    },
    deleteOne: async (id, callback) => {
        const queryString = `DELETE FROM Restaurants WHERE id=?;`
        await db.query(queryString, [id], (err, result) => {
            if (err) callback({status: 500, message: "Internal Server Error"});
            callback(null, result)
        })
    },
    update: async (id, restaurant, callback) => {
            const queryString = `UPDATE Restaurants SET restaurant=? WHERE id =?;`
            await db.query(queryString, [restaurant, id], (err, result) => {
                if (err) callback({status: 500, message: "Internal Server Error"});
                callback(null, result)
            });
    }
};


module.exports = modelHelpers;