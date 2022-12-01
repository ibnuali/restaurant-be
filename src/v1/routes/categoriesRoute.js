const express = require('express');
const categoriesController = require('../../controllers/categoryController');
const router = express.Router();

const methodNotAllowed = (req, res) => { res.status(405).json({ "message": "Method Not Allowed" }); };

router.route('/').
    get(categoriesController.getAllCategories).
    post(categoriesController.createCategory)
    .all(methodNotAllowed);

router.route('/:id')
    .get(categoriesController.getAllCategories)
    .put(categoriesController.updateCategory)
    .delete(categoriesController.deleteCategory)
    .all(methodNotAllowed);

module.exports = router;