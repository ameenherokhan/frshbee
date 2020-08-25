"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const usercontroller_1 = require("../controllers/usercontroller");
const express = require("express");
const auth_1 = require("../middleware/auth");
exports.userRoute = express.Router();
exports.userRoute.get('/', auth_1.validateUser, usercontroller_1.UserController.getProfile);
exports.userRoute.post('/login', usercontroller_1.UserController.login);
exports.userRoute.post('/registration', usercontroller_1.UserController.registration); //connot made from browser
exports.userRoute.put('/', auth_1.validateUser, usercontroller_1.UserController.updatedProfile);
