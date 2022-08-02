const modelHelpers = require("../../database/controllers/models");

const controllers = { // TODO: write unit tests for each path 
    getAll: (req, res) => {
        modelHelpers.getAll((err, data) => {
            if (err){ // refractor error handling to use try/catch
                res.status(404).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    }, 
    create: (req, res) => {
        modelHelpers.create(req.body, (err, results) => {
            if (err){
                res.status(404).send(err);
            } else {
                res.status(200).send(`Added ${req.body.restaurant} into Restaurants table.`);
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
    deleteOne: (req, res) => {
        modelHelpers.deleteOne(req.params.id, (err, results) => {
            if (err) {
                res.status(404).send(err);
            } 
            res.status(200).send(results)
        })
   },
   update: (req, res) => {
    modelHelpers.update(req.params.id, req.body.payload, (err, results) => {
        if (err) {
            res.status(404).send(err);
        } 
        res.status(200).send(results)
    })
}
}

module.exports = controllers;