const express = require('express');
const orderController = require('../../controllers/orderController');
const router = express.Router();

const methodNotAllowed = (req, res) => { res.status(405).json({ "message": "Method Not Allowed" }); };

router.route('/').
    get(orderController.getAllOrders).
    post(orderController.createOrder)
    .all(methodNotAllowed);


router.route('/:id')
    .get(orderController.getOrder)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder)
    .all(methodNotAllowed);

module.exports = router;