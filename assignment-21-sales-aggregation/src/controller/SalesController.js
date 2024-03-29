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
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $multiply: ['$Quantity', '$Price'] } },
                },
            },
        ]);

        const totalRevenue = data[0].totalRevenue;

        res.status(200).json({status:"Success", totalRevenue: totalRevenue});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// quantity-by-product
exports.getQuantityByProduct = async (req, res) => {
    try{
        let data = await SalesModel.aggregate([
            {
                $group: {
                    _id : "$Product",
                    Quantity :{ $sum : "$Quantity" }
                }

            }
        ]);

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// top-products
exports.getTopProducts = async (req, res) => {
    try{
        let data = await SalesModel.aggregate([
            {
                $group: {
                    _id: "$Product",
                    Total: {$sum: {$multiply: ['$Quantity', '$Price']}},

                }
            },
            {
                $sort : {Total : -1 }
            },
            {
                $limit : 5
            }

        ]);

        res.status(200).json({status:"Success", data: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// average-price
exports.getAveragePrice = async (req, res) => {
    try{
        let data = await SalesModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $multiply: ['$Quantity', '$Price'] } },
                    totalQuantity: { $sum: "$Quantity" },
                },
            },
            {
                $project: {
                    _id: 0,
                    AveragePrice: { $divide: ["$totalRevenue", "$totalQuantity"] },
                },
            },
        ]);

        const totalRevenue = data[0].totalRevenue;

        res.status(200).json({status:"Success", totalRevenue: data});
    } catch (error){
        res.status(400).json({status:"Fail", data: error});
    }
}

// revenue-by-month
exports.getRevenueByTime = async (req, res) => {
    try {
        let data = await SalesModel.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$Date" },
                        month: { $month: "$Date" },
                    },
                    totalRevenue: { $sum: { $multiply: ["$Quantity", "$Price"] } },
                },
            },
            {
                $project: {
                    _id: 0,
                    year: "$_id.year",
                    month: "$_id.month",
                    totalRevenue: 1,
                },
            },
            {
                $sort: {
                    year: 1,
                    month: 1,
                },
            },
        ]);

        res.status(200).json({ status: "Success", data: data });
    } catch (error) {
        res.status(400).json({ status: "Fail", data: error });
    }
}

// highest-quantity-sold
exports.getHighestQuantitySold = async (req, res) => {
    try{
        let data = await SalesModel.aggregate([
            {
                $group: {
                    _id: { product: "$Product", date: "$Date" },
                    totalQuantity: { $sum: "$Quantity" },
                },
            },
            {
                $sort: { totalQuantity: -1 },
            },
            {
                $limit: 1,
            },
            {
                $project: {
                    _id: 0,
                    product: "$_id.product",
                    date: "$_id.date",
                    totalQuantity: 1,
                },
            },
        ]);

        res.status(200).json({ status: "Success", data: data });
    } catch (error) {
        res.status(400).json({ status: "Fail", data: error });
    }
}