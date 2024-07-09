const express = require("express");
const CNRouter = express.Router();
const f340 = require("./cn");

CNRouter.get("/", (req, res) => {
  const {
    OuterCode,
    LDPCFrameLength,
    Modulation,
    CodeRate,
    FFTSize,
    BandwidthOption,
    ScatteredPilotPattern,
    ScatteredPilotBoost,
    BackstopNoise,
    CorrectionForRealChannelEstimationdB,
  } = req.query;

  if (
    !OuterCode ||
    !LDPCFrameLength ||
    !Modulation ||
    !CodeRate ||
    !FFTSize ||
    !BandwidthOption ||
    !ScatteredPilotPattern ||
    !ScatteredPilotBoost ||
    !BackstopNoise
  ) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  try {
    const result = f340.GetFinalCN(
      "gauss",
      Number(OuterCode), // t.OuterCode
      Number(LDPCFrameLength), // t.LDPCFrameLength
      Number(Modulation), // t.Modulation
      Number(CodeRate), // t.CodeRate
      Number(FFTSize), // t.FFTSize
      Number(BandwidthOption), // t.BandwidthOption
      Number(ScatteredPilotPattern), // t.ScatteredPilotPattern
      Number(ScatteredPilotBoost), // t.ScatteredPilotBoost
      Number(BackstopNoise), // t.BackstopNoise
      CorrectionForRealChannelEstimationdB
        ? CorrectionForRealChannelEstimationdB
        : undefined // t.CorrectionForRealChannelEstimationdB
    );
    return res.status(200).json({ cnr: result });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

module.exports = CNRouter;
