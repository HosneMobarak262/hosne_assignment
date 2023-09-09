const express=require('express');
const router=express.Router();

const BlogController = require("../controller/BlogController")
const {getAllBlogs} = require("../controller/BlogController");

const SalesController = require("../controller/SalesController")
const {getAllSales} = require("../controller/SalesController");
// const {getTotalRevenue} = require("../controller/SalesController");

// API Routing End Point

// Blogs
router.get("/blog", BlogController.getAllBlogs);
router.get("/blog/:id", BlogController.getBlogByID);
router.post("/blog", BlogController.createBlog);
router.put("/blog/:id", BlogController.updateBlogByID);
router.delete("/blog/:id", BlogController.deleteBlogByID);


// Sales Assignment
router.get("/sales/total-revenue", SalesController.getTotalRevenue);


// Sales
router.get("/sales", SalesController.getAllSales);
router.get("/sales/:id", SalesController.getSalesByID);
router.post("/sales", SalesController.createSales);
router.put("/sales/:id", SalesController.updateSalesByID);
router.delete("/sales/:id", SalesController.deleteSalesByID);

module.exports=router;