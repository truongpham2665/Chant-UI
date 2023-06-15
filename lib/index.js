"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButton = exports.formatCurrency = void 0;
function formatCurrency(value) {
    const tmpString = value.toString();
    return tmpString.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
exports.formatCurrency = formatCurrency;
const MyButton_1 = __importDefault(require("./MyButton"));
exports.MyButton = MyButton_1.default;
