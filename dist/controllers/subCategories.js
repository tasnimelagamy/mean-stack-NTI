"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubcategory = exports.updateSubcategory = exports.getSubcategory = exports.getSubcategories = exports.createSubcategory = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const subCategoriesModels_1 = __importDefault(require("../models/subCategoriesModels"));
const apiErrors_1 = __importDefault(require("../utils/apiErrors"));
exports.createSubcategory = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategory = yield subCategoriesModels_1.default.create(req.body);
    res.status(201).json({ data: subcategory });
}));
exports.getSubcategories = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield subCategoriesModels_1.default.find();
    res.status(200).json({ data: categories });
}));
exports.getSubcategory = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategory = yield subCategoriesModels_1.default.findById(req.params.id);
    if (!subcategory) {
        return next(new apiErrors_1.default('Subcategory Not Found', 404));
    }
    ;
    res.status(200).json({ data: subcategory });
}));
exports.updateSubcategory = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategory = yield subCategoriesModels_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subcategory) {
        return next(new apiErrors_1.default('subCategory Not Found', 404));
    }
    ;
    res.status(200).json({ data: subcategory });
}));
exports.deleteSubcategory = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategory = yield subCategoriesModels_1.default.findByIdAndDelete(req.params.id);
    if (!subcategory) {
        return next(new apiErrors_1.default('subCategory Not Found', 404));
    }
    ;
    res.status(204).json();
}));
