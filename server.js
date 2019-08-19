const express = require('express');
const path = require('path');
const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');
const ticketsRouter = require('./routes/tickets');
const app = express();
const port = 3000;

require('./config/mongoose');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parsing middleware must be written ABOVE your router middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', ticketsRouter);

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
