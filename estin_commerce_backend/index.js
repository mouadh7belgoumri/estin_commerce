"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_js_1 = require("./routes/products.js");
// configDotenv()
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', products_js_1.productsRouter);
app.listen(8000, function () { return console.log("server running on http://localhost:8000/"); });
