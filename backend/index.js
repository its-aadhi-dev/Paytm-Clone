const express = require("express");
const routes = require("./routers/index.js");

const app = express();

app.use("/api/v1", routes);

