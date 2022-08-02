const modelHelpers = require("../../database/controllers/models");

const controllers = { // TODO: write unit tests for each path 
    getAll: (req, res) => {
        modelHelpers.getAll((err, data) => {
            if (err){ 
                res.status(err.status).send(err.message);
            } else {
                res.status(200).send(data);
            }
        })
    }, 
    create: async (req, res) => {
       await modelHelpers.create(req.body, (err, results) => {
            if (err){
                res.status(err.status).send(err.message);
            } else {
                res.status(200).send({});
            }
        })
    },
    deleteAll: async (req, res) => {
       await modelHelpers.deleteAll((err, results) => {
            if (err){
                res.status(err.status).send(err.message);
            } else {
                res.status(200).send({});
            }
        })
    },
    deleteOne: async (req, res) => {
        await modelHelpers.deleteOne(req.params.id, (err, results) => {
            if (err) {
                res.status(err.status).send(err.message);
            } 
            res.status(200).send({})
        })
   },
   update: async (req, res) => {
        if (Number.isNaN(req.params.id) || !req.body.restaurant) {
            res.status(400).send("Invalid arguments provided") 
        } else {
            await modelHelpers.update(req.params.id, req.body.restaurant, (err, results) => {
                if (err) {
                    res.status(err.status).send(err.message)
                } 
                res.status(200).send({})
            })
        } 
}
}

module.exports = controllers;