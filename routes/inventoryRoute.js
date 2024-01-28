const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

// Route to display single car view
router.get("/detail/:invId", invController.displayCarById);

// Route to get each car displayed
//router.get("/type/:classificationId/:Inv_Id", invController.buildVehicleDetails)

module.exports = router;