"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/product'); //dir means the folder name
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); //ALWAYS SAVE IN ORGINALFILE
    }
});
exports.upload = multer({ storage: storage });
