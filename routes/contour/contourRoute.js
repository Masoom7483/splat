const express = require("express");
const contourRouter = express.Router();
const { tvfmfs_metric, calculateTerminalPoint } = require("./contour");

contourRouter.post("/", (req, res) => {
  const {
    callsign,
    latitude,
    longitude,
    groundElevationAMSL,
    antennaHeightAGL,
    antennaHeightAMSL,
    antennaHaat,
    avgTerrainHeightAMSLPerAzimuth,
    erp,
    channel,
    field,
    distance,
    fs_or_dist,
    curve,
    flag,
  } = req.body;

  if (
    !callsign ||
    !latitude ||
    !longitude ||
    // !groundElevationAMSL ||
    // !antennaHeightAGL ||
    !antennaHeightAMSL ||
    // !antennaHaat ||
    !avgTerrainHeightAMSLPerAzimuth
  ) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const result = [];
    for (let i = 0; i < avgTerrainHeightAMSLPerAzimuth.length; i++) {
      const haat = antennaHeightAMSL - avgTerrainHeightAMSLPerAzimuth[i];
      let distanceFromSource = tvfmfs_metric(
        erp ? erp : "1000",
        haat,
        channel ? channel : 20,
        field ? field : 41,
        distance ? distance : 0,
        fs_or_dist ? fs_or_dist : 2,
        curve ? curve : 2,
        flag ? flag : []
      );
      let azimuth = i;
      let terminalPoint = calculateTerminalPoint(
        latitude,
        longitude,
        distanceFromSource,
        azimuth
      );
      result.push([terminalPoint.longitude, terminalPoint.latitude]);
    }
    result.push([result[0][0], result[0][1]]);

    return res.status(200).json({ contour: result });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

module.exports = contourRouter;
