const router = require("express").Router();
const userController = require("./user.controller");

router.post("/sign-up", userController.signupUser);

router.get("/get-all", userController.getUser);

/* Edit User */
router.put("/edit-user/:id", (req, res) => {
  return res.status(200).json({ message: "All user" });
});

module.exports = router;
