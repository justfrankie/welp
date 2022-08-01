const controllers = require('./controllers/index');
const router = require('express').Router();

router
.route('/all')
.get(controllers.getAll)
.delete(controllers.deleteAll)

router
.route('/create')
.post(controllers.create)

router
.route('/deleteOne/:id')
.delete(controllers.deleteOne)

module.exports = router;