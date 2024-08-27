"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_1 = require("../controllers/categories");
const categoriesValidator_1 = require("../utils/validation/categoriesValidator");
const categoriesRoute = (0, express_1.Router)();
categoriesRoute.route('/')
    .get(categories_1.getCategories)
    .post(categoriesValidator_1.createCategoryValidator, categories_1.createCategory);
categoriesRoute.route('/:id')
    .get(categoriesValidator_1.getCategoryValidator, categories_1.getCategory)
    .put(categoriesValidator_1.updateCategoryValidator, categories_1.updateCategory)
    .delete(categoriesValidator_1.deleteCategoryValidator, categories_1.deleteCategory);
exports.default = categoriesRoute;
