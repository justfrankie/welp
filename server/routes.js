 const express = require('express');
 const controllers = require('./controllers/index');

const router = express.Router();

router
.route('/all')
.get(controllers.getAll)
.delete(controllers.deleteAll)

router
.route('/add')
.post(controllers.addOne)

router
.route('/deleteOne/:id')
.delete(controllers.deleteOne)

module.exports = router;