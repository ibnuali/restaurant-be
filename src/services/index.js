const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = (Model) => {
    return catchAsync(async (req, res, next) => {
        const data = await Model.findAll();
        if (!data) {
            return next(new AppError('Data Empty', 404).sendError(res));
        }
        res.status(200).json({
            status: 'success',
            data: data
        });
    })
}

exports.bulkCreate = (Model) => {
    return catchAsync(async (req, res, next) => {
        Promise.all(req.body.map(async (item) => {
            const data = await Model.create(item);
            return data;
        })).then((data) => {
            res.status(200).json({
                status: 'success',
                data: data
            });
        }
        ).catch((err) => {
            return next(new AppError(err.message, 404).sendError(res));
        }
        );

    })
}

exports.getOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const data = await Model.findOne({ where: { id: req.params.id } });
        if (!data) {
            return next(new AppError('No data found with that ID', 404).sendError(res));
        }
        res.status(200).json({
            status: 'success',
            data: data
        });
    })
}

exports.createOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const data = await Model.create(req.body);
        if (!data) {
            return next(new AppError('failed to create document', 400).sendError(res));
        }
        res.status(201).json({
            status: 'success',
            data: data
        });
    });
}

exports.deleteOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const data = await Model.destroy({ where: { id: req.params.id } });
        if (!data) {

            return next(new AppError('No data found with that ID', 404).sendError(res));
        }
        res.status(201).json({
            status: 'success',
            data: data
        });
    })
}

exports.updateOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const data = await Model.update(req.body, { where: { id: req.params.id } },);
        if (!data) {
            return next(new AppError('No data found with that ID', 404).sendError(res));
        }
        res.status(201).json({
            status: 'success',
            data: data
        });
    })
}