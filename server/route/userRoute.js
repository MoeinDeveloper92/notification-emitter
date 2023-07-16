const express = require("express");
const {
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(loginUser).post(registerUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
