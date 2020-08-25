"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function validateUser(req, res, next) {
    const token = req.headers['x-access-token'];
    const private_key = process.env.PRIVATEKEY || '';
    jsonwebtoken_1.verify(token, private_key, (err, decode) => {
        if (err) {
            res.status(401).json({ status: 'failed', message: 'your session is expired', data: null });
        }
        else {
            req.body.userId = decode.id;
            next();
        }
    });
}
exports.validateUser = validateUser;
