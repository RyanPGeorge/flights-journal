const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    // make sure you have middleware express.json() and express.urlencoded() installed! 
    // req.body ------ form data -+-+-+ {'airline': "United"}
    Flight.create(req.body, function(err, flight){
        res.redirect('/flights')
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flights: flight._id}, function(err, tickets) {
        console.log(tickets);
        res.render('flights/show', {
            title: 'Flight Detail', 
            flight, 
            tickets
            });
        });
    });
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err, flight) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
