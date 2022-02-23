// external imports
const express = require("express");

// internal imports
const {
  addUser,
  deleteUser,
  sendMessage,
  removeMsgAndAttachments,
} = require("../controller/uploadController");
const attachmentUpload = require("../middleware/attachmentUpload");
const avatarUpload = require("../middleware/avatarUpload");
const router = express.Router();

// POST: image and user
router.post("/", avatarUpload, addUser);

// DELETE: image and user
router.delete("/:id", deleteUser);

// POST: multiple attachment image
router.post("/multiple", attachmentUpload, sendMessage);

// DELETE: multiple image and message
router.delete("/multiple/:id", removeMsgAndAttachments);

// export function
module.exports = router;
