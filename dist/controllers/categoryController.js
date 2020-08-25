"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_1 = require("../models/category");
class CategoryController {
    static getCategories(req, res, next) {
        category_1.Category.find({}, (err, result) => {
            if (err) {
                res.status(500).json({
                    status: 'failed', message: err
                });
            }
            else {
                res.json({
                    status: 'success', message: 'Categories Found!', data: result
                });
            }
        });
    }
    static saveCategories(req, res, next) {
        const categories = req.body;
        category_1.Category.insertMany(categories, (err, result) => {
            if (err) {
                res.status(500).json({
                    status: 'failed', message: err
                });
            }
            else {
                res.json({
                    status: 'success', message: 'Categories Added!', data: result
                });
            }
        });
    }
}
exports.CategoryController = CategoryController;
