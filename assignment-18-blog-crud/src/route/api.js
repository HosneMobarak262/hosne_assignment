const express=require('express');
const router=express.Router();

const BlogController = require("../controller/BlogController")
const {getAllBlogs} = require("../controller/BlogController");

// API Routing End Point
router.get("/blog", BlogController.getAllBlogs);
router.get("/blog/:id", BlogController.getBlogByID);
router.post("/blog", BlogController.createBlog);
router.put("/blog/:id", BlogController.updateBlogByID);
router.delete("/blog/:id", BlogController.deleteBlogByID);


module.exports=router;