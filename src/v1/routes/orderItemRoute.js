const express = require('express');
const orderItemController = require('../../controllers/orderItemController');
const router = express.Router();

const methodNotAllowed = (req, res) => { res.status(405).json({ "message": "Method Not Allowed" }); };

router.route('/').
    get(orderItemController.getAllOrderItems).
    post(orderItemController.createOrderItems)
    .all(methodNotAllowed);


router.route('/:id')
    .get(orderItemController.getOrderItems)
    .put(orderItemController.updateOrderItems)
    .delete(orderItemController.deleteOrderItems)
    .all(methodNotAllowed);

module.exports = router;