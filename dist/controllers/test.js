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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shop = void 0;
const express_1 = require("express");
const shop = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { budget, keyboards, drives } = req.body;
    const concat_array = yield shopArrayConcat(keyboards, drives, budget);
    const filter = concat_array.filter((d) => d.amount <= budget);
    const array_orderByAmount = yield orderDescByProp(filter, 'amount');
    const selected = array_orderByAmount.find((d) => d.amount <= budget);
    if (!selected) {
        return res.json({ output: -1 });
    }
    return res.json({ output: selected.amount });
});
exports.shop = shop;
const orderDescByProp = (array, prop) => __awaiter(void 0, void 0, void 0, function* () {
    yield array.sort(((a, b) => b[prop] - a[prop]));
    return array;
});
const shopArrayConcat = (keyboards, drives, budget) => __awaiter(void 0, void 0, void 0, function* () {
    let arrayOne = [], arrayTwo = [], array_selected = 'keyboards';
    if (keyboards.length > drives.length) {
        arrayOne = keyboards;
        arrayTwo = drives;
    }
    else {
        arrayOne = drives;
        arrayTwo = keyboards;
        array_selected = 'drives';
    }
    let concat_array = [];
    arrayOne.forEach((item) => {
        arrayTwo.forEach((item2) => {
            const amount = item + item2;
            let keyboard = 0, usb = 0;
            if (array_selected === 'keyboards') {
                keyboard = item;
                usb = item2;
            }
            else {
                usb = item;
                keyboard = item2;
            }
            const data = {
                keyboard,
                usb,
                amount,
                budget
            };
            concat_array.unshift(data);
        });
    });
    return concat_array;
});
//# sourceMappingURL=test.js.map