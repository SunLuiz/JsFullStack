const multer = require('multer');
const patch = require('path');

module.exports = {
  storage : multer.diskStorage({
    destination: patch.resolve(__dirname,'..','..','uploads'),
    filename:(req, file, cb) => {
      const ext = patch.extname(file.originalname);
      const name = patch.basename(file.originalname, ext);

        cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};
