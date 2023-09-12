const express = require('express');
const router = express.Router();

const blogControl = require("../Controllers/blogController");
const commentControl = require("../Controllers/commentController");
const messageControl = require("../Controllers/messageController");
const portfolioControl = require("../Controllers/portfolioController");
const productControl = require("../Controllers/productController");

//From blogController
router.get("/create_blog", blogControl.create);
router.get("/read_blog", blogControl.read);
router.get("/delete_blog", blogControl.delete);
router.get("/update_blog", blogControl.update);

//From commentController
router.get("/create_comment", commentControl.create);
router.get("/read_comment", commentControl.read);
router.get("/delete_comment", commentControl.delete);
router.get("/update_comment", commentControl.update);

//From messageController
router.get("/create_message", messageControl.create);
router.get("/read_message", messageControl.read);
router.get("/delete_message", messageControl.delete);
router.get("/update_message", messageControl.update);

//From portfolioController
router.get("/create_portfolio", portfolioControl.create);
router.get("/read_portfolio", portfolioControl.read);
router.get("/delete_portfolio", portfolioControl.delete);
router.get("/update_portfolio", portfolioControl.update);

//From productController
router.get("/create_product", productControl.create);
router.get("/read_product", productControl.read);
router.get("/delete_product", productControl.delete);
router.get("/update_product", productControl.update);


module.exports = router;