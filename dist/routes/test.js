"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const shop_1 = require("../controllers/shop");
const birds_1 = require("../controllers/birds");
const validate_1 = require("../middlewares/validate");
const router = (0, express_1.Router)();
router.post('/shop', [
    (0, express_validator_1.check)('budget', 'budget is required').not().isEmpty(),
    (0, express_validator_1.check)('keyboards', 'keyboards is required').not().isEmpty(),
    (0, express_validator_1.check)('drives', 'drives is required').not().isEmpty(),
    validate_1.validateFields
], shop_1.shop);
router.post('/birds', [
    (0, express_validator_1.check)('population', 'population is required').not().isEmpty(),
    validate_1.validateFields
], birds_1.birds);
exports.default = router;
//# sourceMappingURL=test.js.map