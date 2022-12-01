const Category = require("../models/Categories");
const service = require("../services/");

module.exports = {
    getAllCategories: service.getAll(Category),
    getCategory: service.getOne(Category),
    createCategory: service.createOne(Category),
    updateCategory: service.updateOne(Category),
    deleteCategory: service.deleteOne(Category)
}