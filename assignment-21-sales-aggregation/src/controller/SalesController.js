const SalesModel = require('../model/SalesModel');
const {json} = require('express');

// create Blog
exports.createSales = async (req, res) => {
    try{
        let reqBody = req.body;
        let data = await SalesModel.create(reqBody);
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// read all blogs
exports.getAllSales = async (req, res) => {
    try{
        let data = await SalesModel.find();
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// read one blog
exports.getSalesByID = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await SalesModel.findOne({_id:id});
        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// update one blog
exports.updateSalesByID = async (req, res) => {
    try {
        let id = req.params.id;
        let reqBody = req.body;

        let data = await SalesModel.updateOne({_id: id}, reqBody);

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// Delete one blog
exports.deleteSalesByID = async (req, res) => {
    try {
        let id = req.params.id;

        let data = await SalesModel.deleteOne({_id: id});

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// Assignment

// total sales revenue
exports.getTotalRevenue = async (req, res) => {
    try{
        let data = await SalesModel.aggregate([
            {
                $project: {
                    quantity: { $toDouble: '$Quantity' },
                    price: { $toDouble: '$Price' },
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
                },
            },
        ]);

        const totalRevenue = data[0].totalRevenue;

        res.status(200).json({status:"Success", totalRevenue: totalRevenue});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}