const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');


// Get /flights/ => "See all the flights"
// Routers map to a controller action
router.get('/', flightCtlr.index);

// GET /flights/new => renders the flight form to the clent so a flight can then be created
router.get('/new', flightCtlr.new);


// POST /flights => take form data (data Payload) and then have mongoose/mongoDB create a document
router.post('/', flightCtlr.create);


// Get/flights/:id => navigate to show page of one particular flight and all its properties
router.get('/:id', flightCtlr.show);

// POST/flights/:id/destination => add a destination record to an existing flight
router.post('/:id/destinations', flightCtlr.addDestination);
 

module.exports = router;