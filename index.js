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
const famille = require("./routes/api/famille");
const acte = require("./routes/api/acte");
const caisse = require("./routes/api/caisse");
const argent = require("./routes/api/argent");
const actioncaisse = require("./routes/api/actioncaisse");
const vente = require("./routes/api/vente");
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
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
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
    res.status(200).send("Welcome to Egreffe");
});

app.use("/api/users", users);
app.use("/api/famille", famille);
app.use("/api/acte", acte);
app.use("/api/caisse", caisse);
app.use("/api/argent", argent);
app.use("/api/actioncaisse", actioncaisse);
app.use("/api/vente", vente);

/**
 * Server Activation
 */

const port = process.env.PORT || "5000";

app.listen(port, () => console.log('Server up and running!'));