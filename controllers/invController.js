const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}


/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
//  const vehicles_id = req.params.inv_id
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
//  const vehicle = await invModel.getVehicleId(vehicles_id)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

// Display single car view
invCont.displayCarById = async function (req, res, next) {
  const invId = req.params.invId;
  const data = await invModel.getCarById(invId);
  const car = await utilities.getVehicle(data);
  let name = data[0].inv_make + ' ' + data[0].inv_model;
  let nav = await utilities.getNav();
  res.render("./inventory/vehicle", {title: name, nav, car,});
};

module.exports = invCont
