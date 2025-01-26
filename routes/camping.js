const express = require("express");
const router = express.Router();
//controllers
const { listCamping , readCamping ,createCamping , updateCamping , deleteCamping } =require('../controllers/camping')


// @END POINT: http://localhost:5000/api/camping
// @METHOD: GET [list camping]
// @ACCESS: Public
router.get("/camping",listCamping)

// @END POINT: http://localhost:5000/api/camping/5
// @METHOD: GET [read camping]
// @ACCESS: Public
router.get("/camping/:id",readCamping)



// @END POINT: http://localhost:5000/api/camping
// @METHOD: POST [create camping]
// @ACCESS: Public
router.post('/camping',createCamping)

// @END POINT: http://localhost:5000/api/camping/5
// @METHOD: PUT [update camping]
// @ACCESS: Public

router.put("/camping/:id",updateCamping)

// @END POINT: http://localhost:5000/api/camping/5
// @METHOD: Delete [delete camping]
// @ACCESS: Public

router.delete("/camping/:id",deleteCamping)

module.exports = router;
