const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const CNRouter = require("./routes/cn/CNRoute");
const bitrateRouter = require("./routes/bitrate/bitrateRoute");
const contourRouter = require("./routes/contour/contourRoute");
const tilelayerRoute = require("./routes/tilelayer/tilelayerRoute");

app.use(express.json());
app.use(cors());

app.use("/api/calculate-cn", CNRouter);
app.use("/api/calculate-bitrate", bitrateRouter);
app.use("/api/calculate-contour", contourRouter);
app.use("/api/tilelayer", tilelayerRoute);
// app.use

app.get("", (req, res) => {
  res.send("Route not found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
