const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"), //1
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"), //2
    body("password")
      .isLength({ min: 9 })
      .withMessage("password must containe 8 minimum characters"), // 3
  ],
  userController.registerUser
);
module.exports = router;
