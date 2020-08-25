import * as multer from 'multer';

const storage = multer.diskStorage({//to store in local
    destination: function (req, file, cb) {
      cb(null, __dirname + '/product')//dir means the folder name
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)//ALWAYS SAVE IN ORGINALFILE
    }
  });

export const upload = multer({ storage:storage });