// external imports
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// creating new storage
const accountStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Folder name", // give your folder name
  },
});

// export module
module.exports = accountStorage;
