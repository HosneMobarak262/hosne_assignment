const BlogModel = require('../model/BlogModel');
const {json} = require('express');

// create Blog
exports.createBlog = async (req, res) => {
    try{
        let reqBody = req.body;
        let data = await BlogModel.create(reqBody);
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// read all blogs
exports.getAllBlogs = async (req, res) => {
    try{
        let data = await BlogModel.find();
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// read one blog
exports.getBlogByID = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await BlogModel.findOne({_id:id});
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// update one blog
exports.updateBlogByID = async (req, res) => {
    try {
        let id = req.params.id;
        let reqBody = req.body;

        let data = await BlogModel.updateOne({_id: id}, reqBody);

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// Delete one blog
exports.deleteBlogByID = async (req, res) => {
    try {
        let id = req.params.id;

        let data = await BlogModel.deleteOne({_id: id});

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}
