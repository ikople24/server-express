const express = require("express");
const router = express.Router();

//controllers 
const { authCheck } = require("../middlewares/auth");
const {createImages} = require("../controllers/cloudinary")  

// @endpoint http://localhost:4000/api/images
router.post("/images",authCheck , createImages );

module.exports = router;