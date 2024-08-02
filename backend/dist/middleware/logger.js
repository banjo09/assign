"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    res.on('finish', () => {
        console.log(`${res.statusCode} ${res.statusMessage}`);
    });
    next();
};
exports.loggerMiddleware = loggerMiddleware;
