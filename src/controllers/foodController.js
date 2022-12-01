const Category = require("../models/Categories");
const Food = require("../models/Food");
const service = require("../services/");
const catchAsync = require("../utils/catchAsync");

// const getFood = async (req, res) => {
//     return catchAsync(async (req, res, next) => {
//         const data = await Model.findOne({ where: { id: req.params.id } });
//         if (!data) {
//             return next(new AppError('No data found with that ID', 404).sendError(res));
//         }
//         res.status(200).json({
//             status: 'success',
//             data: data
//         });
//     })

// }

const getFood = catchAsync(async (req, res, next) => {
    const data = await Food.findAll({
        where: { id: req.params.id },
        include: Category,
        attributes: { exclude: ['categoryId'] }
    });
    if (!data) {
        return next(new AppError('No data found with that ID', 404).sendError(res));
    }
    res.status(200).json({
        status: 'success',
        data: data
    });
});

const getFoodByCategory = catchAsync(async (req, res, next) => {
    const data = await Food.findAll({
        where: { categoryId: req.params.id },
        include: Category,
        attributes: { exclude: ['categoryId'] }
    });
    if (!data) {
        return next(new AppError('No data found with that ID', 404).sendError(res));
    }
    res.status(200).json({
        status: 'success',
        data: data
    });
});


module.exports = {
    getAllFood: service.getAll(Food),
    // getFood: service.getOne(Food),
    getFood,
    getFoodByCategory,
    createFood: service.createOne(Food),
    updateFood: service.updateOne(Food),
    deleteFood: service.deleteOne(Food)
}