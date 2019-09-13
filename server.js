const express = require("express");
const path = require("path");

let app = express();

let PORT = process.env.port || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});