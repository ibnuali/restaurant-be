const OrderItems = require("../models/OrderItem");
const service = require("../services/");


module.exports = {
    getAllOrderItems: service.getAll(OrderItems),
    getOrderItems: service.getOne(OrderItems),
    createOrderItems: service.createOne(OrderItems),
    updateOrderItems: service.updateOne(OrderItems),
    deleteOrderItems: service.deleteOne(OrderItems)
}