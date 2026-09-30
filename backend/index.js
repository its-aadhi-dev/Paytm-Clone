const express = require("express");
const routes = require("./routers/index");
const cors = require("cors");

const app = express();

app.use("/api/v1", routes);
app.use(cors());
app.use(express.json());

app.listen(3000);




