const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js")

//* GET "/drones" => LISTA DE TODOS LOS DRONES

router.get('/drones', (req, res, next) => {
  
  Drone.find()
  .then((allDrones) => {
    console.log(allDrones)
    res.render("drones/list.hbs", {
      allDrones: allDrones
    })
  }).catch((err) => {
    console.log(err)
  });


});

//* GET ROUTE "/drones/create" => AÑADIR NUEVO DRON
router.get('/drones/create', (req, res, next) => {
  
  res.render("drones/create-form.hbs")


});


//* POST => AñADIR NUEVO DRON

router.post('/drones/create', (req, res, next) => {
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  })
  .then(()=>{
  
    console.log("Dron creado :)");

    res.redirect("/drones")
  })
  .catch((error)=>{
    console.log(error)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
