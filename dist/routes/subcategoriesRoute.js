"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subcategories_1 = require("../controllers/subcategories");
const subcategoriesValidator_1 = require("../utils/validation/subcategoriesValidator");
const subcategoriesRoute = (0, express_1.Router)();
subcategoriesRoute.route('/')
    .get(subcategories_1.getSubcategories)
    .post(subcategoriesValidator_1.createSubcategoryValidator, subcategories_1.createSubcategory);
subcategoriesRoute.route('/:id')
    .get(subcategoriesValidator_1.getSubcategoryValidator, subcategories_1.getSubcategory)
    .put(subcategoriesValidator_1.updateSubcategoryValidator, subcategories_1.updateSubcategory)
    .delete(subcategoriesValidator_1.deleteSubcategoryValidator, subcategories_1.deleteSubcategory);
exports.default = subcategoriesRoute;
