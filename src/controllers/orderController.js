const Order = require("../models/Order");
const service = require("../services/");


module.exports = {
    getAllOrders: service.getAll(Order),
    getOrder: service.getOne(Order),
    createOrder: service.createOne(Order),
    updateOrder: service.updateOne(Order),
    deleteOrder: service.deleteOne(Order)
}