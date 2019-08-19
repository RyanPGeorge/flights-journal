const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/tickets');

//render a new ticket form
router.get('/flights/:id/tickets/new', ticketCtlr.new);

// create a new ticket
router.post('/flights/:id/tickets', ticketCtlr.create);

module.exports = router;