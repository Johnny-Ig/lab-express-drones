// Iteration #1
const Drone = require("../models/Drone.model.js")
const mongoose = require("mongoose")
require("../db/index.js")
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  Drone.insertMany(drones)
  .then((allDrones) => {
    console.log(allDrones);
    mongoose.connection.close()
  }).catch((err) => {
    console.log(err);
  });