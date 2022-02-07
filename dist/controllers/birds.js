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
exports.birds = void 0;
const express_1 = require("express");
const birds = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { population } = req.body;
    const popular_bird_id = yield getPopularBirdId(population);
    return res.json({ output: popular_bird_id });
});
exports.birds = birds;
const getPopularBirdId = (population) => __awaiter(void 0, void 0, void 0, function* () {
    let repeats = {};
    population.forEach((number) => {
        repeats[number] = (repeats[number] || 0) + 1;
    });
    const values = Object.values(repeats);
    const keys = Object.keys(repeats);
    const duplicates_obj = [];
    for (let i = 0; i < keys.length; i++) {
        const number = Number(values[i]);
        const data = {
            bird_id: keys[i],
            duplicates: number
        };
        duplicates_obj.unshift(data);
    }
    const max = Math.max.apply(Math, duplicates_obj.map(function (o) {
        return o.duplicates;
    }));
    const filter_max = duplicates_obj.filter(value => value.duplicates === max);
    const search = filter_max.reduce((acc, bird) => {
        acc[bird.duplicates] = ++acc[bird.duplicates] || 0;
        return acc;
    }, {});
    if (filter_max.length === 1) {
        const popular_bird_id = Math.min.apply(Math, filter_max.map(function (o) {
            return o.bird_id;
        }));
        return popular_bird_id;
    }
    const duplicates = filter_max.filter((bird) => {
        return search[bird.duplicates];
    });
    const popular_bird_id = Math.min.apply(Math, duplicates.map(function (o) {
        return o.bird_id;
    }));
    return popular_bird_id;
});
//# sourceMappingURL=birds.js.map