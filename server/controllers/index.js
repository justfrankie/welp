const modelHelpers = require("../../database/helpers.js");

const controllers = {
    getAll: (req, res) => {
        modelHelpers.getAll((err, data) => {
            if (err){
                res.status(404).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    }, 
    addOne: (req, res) => {
        modelHelpers.addOne(req.body, (err, results) => {
            if (err){
                res.status(404).send(err);
            } else {
                res.status(200).send(`${req.body.restaurant} posted into the database`);
            }
        })
    },
    deleteAll: (req, res) => {
        modelHelpers.deleteAll((err, results) => {
            if (err){
                res.status(404).send(err);
            } else {
                res.status(200).send('succesfully truncated table.');
            }
        })
    },
    deleteOne: (req, res) => { // this is where we need req.params!!!!
        modelHelpers.deleteOne( req.params.id, (err, results) => {
            if (err) {
                res.status(404).send(err);
            } 
            res.status(200).send(results)
        })
   }
}

module.exports = controllers;