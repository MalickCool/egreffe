/**
 * Application requirements
 */
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require("passport");
/**
 * Models load
 */
const users = require("./routes/api/users");
/**
 * Database Parameters load
 */
const db = require('./config/config').mongoURI;

/**
 * Express App initialisation and configuration
 */

const app = express();

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({ 
        extended: true 
    })
);

/**
 * Connection to the Database using mongoose
 */

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfuly connected"))
    .catch(err => console.log(err));

/**
 * Initialise Passport for jwt & Co
 */
app.use(passport.initialize());

require("./config/passport")(passport);

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

/**
 * Server Activation
 */

const port = process.env.PORT || "8000";

app.listen(port, () => console.log('Server up and running!'));