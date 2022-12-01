const express = require('express');
const foodController = require('../../controllers/foodController');
const router = express.Router();

const methodNotAllowed = (req, res) => { res.status(405).json({ "message": "Method Not Allowed" }); };

router.route('/').
    get(foodController.getAllFood).
    post(foodController.createFood)
    .all(methodNotAllowed);

router.route('/:id')
    .get(foodController.getFood)
    .put(foodController.updateFood)
    .delete(foodController.deleteFood)
    .all(methodNotAllowed);

router.route('/category/:id')
    .get(foodController.getFoodByCategory)
    .all(methodNotAllowed);
    
module.exports = router;