// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Routes
const routes = require("./routes/index");

// Model
const model = require("./model/index");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

// Connecting and synchronizing with the db
const alter = true;
const force = false;

model.sequelize.sync({ alter, force }).then(() => {
    // Running server
    app.listen(5000, () => {
        console.log("Server on");
    });
});
