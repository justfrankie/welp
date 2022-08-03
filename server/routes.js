const router = require("express").Router();
const {
  getAll,
  deleteAll,
  create,
  deleteOne,
  update,
} = require("./controllers/index");

router.route("/all").get(getAll).delete(deleteAll);

router.route("/create").post(create);

router.route("/deleteOne/:id").delete(deleteOne);

router.route("/update/:id").put(update);

module.exports = router;
