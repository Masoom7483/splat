const express = require("express");
const bitrateRouter = express.Router();
const f340 = require("./bitrate");

bitrateRouter.get("/", (req, res) => {
  const {
    ScatteredPilotPattern,
    SystemBandwidth,
    FFTSize,
    BandwidthOption,
    Modulation,
    CodeRate,
    GuardInterval,
    FrameLength,
    OuterCode,
    LDPCFrameLength,
  } = req.query;
  if (
    !ScatteredPilotPattern ||
    !SystemBandwidth ||
    !FFTSize ||
    !BandwidthOption ||
    !Modulation ||
    !CodeRate ||
    !GuardInterval ||
    !FrameLength ||
    !OuterCode ||
    !LDPCFrameLength
  ) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  try {
    const result = f340.GetNetBitrate_mbit_s(
      Number(ScatteredPilotPattern),
      Number(SystemBandwidth),
      Number(FFTSize),
      Number(BandwidthOption),
      Number(Modulation),
      Number(CodeRate),
      Number(GuardInterval),
      Number(FrameLength),
      Number(OuterCode),
      Number(LDPCFrameLength)
    );
    return res.status(200).json({ bitrate: result });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

module.exports = bitrateRouter;
