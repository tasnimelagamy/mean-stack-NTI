"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const categories_1 = require("./controllers/categories");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
(0, database_1.default)();
app.post('/', categories_1.createCategory);
app.listen(process.env.PORT, () => {
    console.log(`app is listened on port ${process.env.PORT} `);
});
