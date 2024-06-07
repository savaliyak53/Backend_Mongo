const router = require("express").Router();
const userRoute = require("./api/user/user.route");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is up and running" });
});

router.use("/user", userRoute);

module.exports = router;
