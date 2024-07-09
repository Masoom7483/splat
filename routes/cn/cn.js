let f339 = {};
Object.defineProperty(f339, "__esModule", {
  value: true,
});

var Profile = (f339.Profile = undefined);
!(function (_) {
  _[(_.Normal = 0)] = "Normal";
})(Profile || (f339.Profile = Profile = {}));

var FFTSize = (f339.FFTSize = undefined);
!(function (_) {
  _[(_.K8 = 0)] = "K8";
  _[(_.K16 = 1)] = "K16";
  _[(_.K32 = 2)] = "K32";
})(FFTSize || (f339.FFTSize = FFTSize = {}));

var BandwidthOption = (f339.BandwidthOption = undefined);
!(function (_) {
  _[(_.BWO_0 = 0)] = "BWO_0";
  _[(_.BWO_1 = 1)] = "BWO_1";
  _[(_.BWO_2 = 2)] = "BWO_2";
  _[(_.BWO_3 = 3)] = "BWO_3";
  _[(_.BWO_4 = 4)] = "BWO_4";
})(BandwidthOption || (f339.BandwidthOption = BandwidthOption = {}));

var Modulation = (f339.Modulation = undefined);
!(function (_) {
  _[(_.QPSK = 0)] = "QPSK";
  _[(_.QAM_16 = 1)] = "QAM_16";
  _[(_.QAM_64 = 2)] = "QAM_64";
  _[(_.QAM_256 = 3)] = "QAM_256";
  _[(_.QAM_1024 = 4)] = "QAM_1024";
  _[(_.QAM_4096 = 5)] = "QAM_4096";
})(Modulation || (f339.Modulation = Modulation = {}));

var CodeRate = (f339.CodeRate = undefined);
!(function (_) {
  _[(_.CR_2_15 = 0)] = "CR_2_15";
  _[(_.CR_1_5 = 1)] = "CR_1_5";
  _[(_.CR_4_15 = 2)] = "CR_4_15";
  _[(_.CR_1_3 = 3)] = "CR_1_3";
  _[(_.CR_2_5 = 4)] = "CR_2_5";
  _[(_.CR_7_15 = 5)] = "CR_7_15";
  _[(_.CR_8_15 = 6)] = "CR_8_15";
  _[(_.CR_3_5 = 7)] = "CR_3_5";
  _[(_.CR_2_3 = 8)] = "CR_2_3";
  _[(_.CR_11_15 = 9)] = "CR_11_15";
  _[(_.CR_4_5 = 10)] = "CR_4_5";
  _[(_.CR_13_15 = 11)] = "CR_13_15";
})(CodeRate || (f339.CodeRate = CodeRate = {}));

var LDPCFrameLength = (f339.LDPCFrameLength = undefined);
!(function (_) {
  _[(_.L64800 = 0)] = "L64800";
  _[(_.L16200 = 1)] = "L16200";
})(LDPCFrameLength || (f339.LDPCFrameLength = LDPCFrameLength = {}));

var GuardInterval = (f339.GuardInterval = undefined);
!(function (_) {
  _[(_.GI1_192 = 0)] = "GI1_192";
  _[(_.GI2_384 = 1)] = "GI2_384";
  _[(_.GI3_512 = 2)] = "GI3_512";
  _[(_.GI4_768 = 3)] = "GI4_768";
  _[(_.GI5_1024 = 4)] = "GI5_1024";
  _[(_.GI6_1536 = 5)] = "GI6_1536";
  _[(_.GI7_2048 = 6)] = "GI7_2048";
  _[(_.GI8_2432 = 7)] = "GI8_2432";
  _[(_.GI9_3072 = 8)] = "GI9_3072";
  _[(_.GI10_3648 = 9)] = "GI10_3648";
  _[(_.GI11_4096 = 10)] = "GI11_4096";
  _[(_.GI12_4864 = 11)] = "GI12_4864";
})(GuardInterval || (f339.GuardInterval = GuardInterval = {}));

var ScatteredPilotPattern = (f339.ScatteredPilotPattern = undefined);
!(function (_) {
  _[(_.SP3_2 = 0)] = "SP3_2";
  _[(_.SP3_4 = 1)] = "SP3_4";
  _[(_.SP4_2 = 2)] = "SP4_2";
  _[(_.SP4_4 = 3)] = "SP4_4";
  _[(_.SP6_2 = 4)] = "SP6_2";
  _[(_.SP6_4 = 5)] = "SP6_4";
  _[(_.SP8_2 = 6)] = "SP8_2";
  _[(_.SP8_4 = 7)] = "SP8_4";
  _[(_.SP12_2 = 8)] = "SP12_2";
  _[(_.SP12_4 = 9)] = "SP12_4";
  _[(_.SP16_2 = 10)] = "SP16_2";
  _[(_.SP16_4 = 11)] = "SP16_4";
  _[(_.SP24_2 = 12)] = "SP24_2";
  _[(_.SP24_4 = 13)] = "SP24_4";
  _[(_.SP32_2 = 14)] = "SP32_2";
  _[(_.SP32_4 = 15)] = "SP32_4";
})(
  ScatteredPilotPattern ||
    (f339.ScatteredPilotPattern = ScatteredPilotPattern = {})
);

var ScatteredPilotBoost = (f339.ScatteredPilotBoost = undefined);
!(function (_) {
  _[(_.SPB_1 = 0)] = "SPB_1";
  _[(_.SPB_2 = 1)] = "SPB_2";
  _[(_.SPB_3 = 2)] = "SPB_3";
  _[(_.SPB_4 = 3)] = "SPB_4";
  _[(_.SPB_5 = 4)] = "SPB_5";
})(
  ScatteredPilotBoost || (f339.ScatteredPilotBoost = ScatteredPilotBoost = {})
);

var SystemBandwidth = (f339.SystemBandwidth = undefined);
!(function (_) {
  _[(_.BW_6 = 0)] = "BW_6";
  _[(_.BW_7 = 1)] = "BW_7";
  _[(_.BW_8 = 2)] = "BW_8";
})(SystemBandwidth || (f339.SystemBandwidth = SystemBandwidth = {}));

var ChannelBonding = (f339.ChannelBonding = undefined);
!(function (_) {
  _[(_.None = 0)] = "None";
  _[(_.Adjacent = 1)] = "Adjacent";
  _[(_.NonAdjacent = 2)] = "NonAdjacent";
})(ChannelBonding || (f339.ChannelBonding = ChannelBonding = {}));

var MultiAntennaType = (f339.MultiAntennaType = undefined);
!(function (_) {
  _[(_.SISO = 0)] = "SISO";
  _[(_.MISO = 1)] = "MISO";
  _[(_.MIMO = 2)] = "MIMO";
})(MultiAntennaType || (f339.MultiAntennaType = MultiAntennaType = {}));

var TDMASubFrame = (f339.TDMASubFrame = undefined);
!(function (_) {
  _[(_.True = 0)] = "True";
  _[(_.False = 1)] = "False";
})(TDMASubFrame || (f339.TDMASubFrame = TDMASubFrame = {}));

var PAPRReduction = (f339.PAPRReduction = undefined);
!(function (_) {
  _[(_.None = 0)] = "None";
  _[(_.TR = 1)] = "TR";
  _[(_.ACE = 2)] = "ACE";
})(PAPRReduction || (f339.PAPRReduction = PAPRReduction = {}));

var OuterCode = (f339.OuterCode = undefined);
!(function (_) {
  _[(_.None = 0)] = "None";
  _[(_.BCH = 1)] = "BCH";
  _[(_.CRC = 2)] = "CRC";
})(OuterCode || (f339.OuterCode = OuterCode = {}));

var FrameLength = (f339.FrameLength = undefined);
!(function (_) {
  _[(_.FL100 = 0)] = "FL100";
  _[(_.FL150 = 1)] = "FL150";
  _[(_.FL200 = 2)] = "FL200";
  _[(_.FL250 = 3)] = "FL250";
})(FrameLength || (f339.FrameLength = FrameLength = {}));

let f341 = {};
Object.defineProperty(f341, "__esModule", {
  value: true,
});
f341.cnLongLdpcBch =
  f341.cnShortLdpcBch =
  f341.cnLongLdpcOnly =
  f341.cnShortLdpcOnly =
  f341.scatteredPilotPattern =
  f341.scatteredPilotBoost =
  f341.numberOfCarriers =
    undefined;

f341.numberOfCarriers = [
  {
    fftSize: f339.FFTSize.K8,
    bandwidthOption: f339.BandwidthOption.BWO_0,
    carriers: 6913,
  },
  {
    fftSize: f339.FFTSize.K8,
    bandwidthOption: f339.BandwidthOption.BWO_1,
    carriers: 6817,
  },
  {
    fftSize: f339.FFTSize.K8,
    bandwidthOption: f339.BandwidthOption.BWO_2,
    carriers: 6721,
  },
  {
    fftSize: f339.FFTSize.K8,
    bandwidthOption: f339.BandwidthOption.BWO_3,
    carriers: 6625,
  },
  {
    fftSize: f339.FFTSize.K8,
    bandwidthOption: f339.BandwidthOption.BWO_4,
    carriers: 6529,
  },
  {
    fftSize: f339.FFTSize.K16,
    bandwidthOption: f339.BandwidthOption.BWO_0,
    carriers: 13825,
  },
  {
    fftSize: f339.FFTSize.K16,
    bandwidthOption: f339.BandwidthOption.BWO_1,
    carriers: 13633,
  },
  {
    fftSize: f339.FFTSize.K16,
    bandwidthOption: f339.BandwidthOption.BWO_2,
    carriers: 13441,
  },
  {
    fftSize: f339.FFTSize.K16,
    bandwidthOption: f339.BandwidthOption.BWO_3,
    carriers: 13249,
  },
  {
    fftSize: f339.FFTSize.K16,
    bandwidthOption: f339.BandwidthOption.BWO_4,
    carriers: 13057,
  },
  {
    fftSize: f339.FFTSize.K32,
    bandwidthOption: f339.BandwidthOption.BWO_0,
    carriers: 27649,
  },
  {
    fftSize: f339.FFTSize.K32,
    bandwidthOption: f339.BandwidthOption.BWO_1,
    carriers: 27265,
  },
  {
    fftSize: f339.FFTSize.K32,
    bandwidthOption: f339.BandwidthOption.BWO_2,
    carriers: 26881,
  },
  {
    fftSize: f339.FFTSize.K32,
    bandwidthOption: f339.BandwidthOption.BWO_3,
    carriers: 26497,
  },
  {
    fftSize: f339.FFTSize.K32,
    bandwidthOption: f339.BandwidthOption.BWO_4,
    carriers: 26113,
  },
];
f341.scatteredPilotBoost = [
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.17,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.29,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.17,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.55,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.66,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.07,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.27,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.41,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.51,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.27,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.51,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.66,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.8,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.43,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.58,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.7,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.41,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.68,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.86,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.29,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.55,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.7,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 1.84,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.51,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.8,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.14,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.45,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.72,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 1.91,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.04,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.68,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.21,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.37,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.55,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 1.84,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.04,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.19,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.82,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2.16,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.57,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.72,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2.04,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.26,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.43,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 2.02,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2.4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.66,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.85,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 1.86,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2.21,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.43,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 2.63,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    boost: f339.ScatteredPilotBoost.SPB_1,
    linear: 1,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    boost: f339.ScatteredPilotBoost.SPB_2,
    linear: 2.16,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    boost: f339.ScatteredPilotBoost.SPB_3,
    linear: 2.57,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    boost: f339.ScatteredPilotBoost.SPB_4,
    linear: 2.85,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    boost: f339.ScatteredPilotBoost.SPB_5,
    linear: 3.05,
  },
];
f341.scatteredPilotPattern = [
  {
    pattern: f339.ScatteredPilotPattern.SP3_2,
    dx: 3,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP3_4,
    dx: 3,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_2,
    dx: 4,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP4_4,
    dx: 4,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_2,
    dx: 6,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP6_4,
    dx: 6,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_2,
    dx: 8,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP8_4,
    dx: 8,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_2,
    dx: 12,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP12_4,
    dx: 12,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_2,
    dx: 16,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP16_4,
    dx: 16,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_2,
    dx: 24,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP24_4,
    dx: 24,
    dy: 4,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_2,
    dx: 32,
    dy: 2,
  },
  {
    pattern: f339.ScatteredPilotPattern.SP32_4,
    dx: 32,
    dy: 4,
  },
];
f341.cnShortLdpcOnly = [
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -5.54,
    rayleigh: -5.07,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -3.73,
    rayleigh: -2.96,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_15,
    gauss: -2.32,
    rayleigh: -1.36,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_3,
    gauss: -1.3,
    rayleigh: -0.08,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_5,
    gauss: -0.33,
    rayleigh: 1.15,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 0.56,
    rayleigh: 2.3,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 1.36,
    rayleigh: 3.44,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 2.19,
    rayleigh: 4.69,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 2.94,
    rayleigh: 5.97,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 3.81,
    rayleigh: 7.46,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 4.7,
    rayleigh: 9.14,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 5.76,
    rayleigh: 11.53,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -2.15,
    rayleigh: -1.14,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 0.34,
    rayleigh: 1.45,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 1.98,
    rayleigh: 3.38,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 3.15,
    rayleigh: 4.78,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 4.46,
    rayleigh: 6.27,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 5.52,
    rayleigh: 7.58,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 6.51,
    rayleigh: 8.95,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 7.56,
    rayleigh: 10.27,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 8.59,
    rayleigh: 11.71,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 9.74,
    rayleigh: 13.23,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 10.8,
    rayleigh: 14.98,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 12.08,
    rayleigh: 17.44,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 0.35,
    rayleigh: 1.6,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 2.85,
    rayleigh: 4.3,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 4.65,
    rayleigh: 6.55,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 6.3,
    rayleigh: 8.3,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 7.93,
    rayleigh: 10.05,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 9.3,
    rayleigh: 11.55,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 10.55,
    rayleigh: 13.09,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 11.83,
    rayleigh: 14.62,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 13.13,
    rayleigh: 16.2,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 14.52,
    rayleigh: 17.85,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 15.85,
    rayleigh: 19.81,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 17.32,
    rayleigh: 22.44,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 2.27,
    rayleigh: 3.6,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 4.79,
    rayleigh: 6.79,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 7.19,
    rayleigh: 9.32,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 8.93,
    rayleigh: 11.16,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 10.92,
    rayleigh: 13.3,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 12.58,
    rayleigh: 15.16,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 14.25,
    rayleigh: 16.96,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 15.81,
    rayleigh: 18.64,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 17.45,
    rayleigh: 20.5,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 19.08,
    rayleigh: 22.39,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 20.76,
    rayleigh: 24.54,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 22.54,
    rayleigh: 27.23,
  },
];
f341.cnLongLdpcOnly = [
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -6.23,
    rayleigh: -5.72,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -4.32,
    rayleigh: -3.62,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_15,
    gauss: -2.89,
    rayleigh: -1.97,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_3,
    gauss: -1.7,
    rayleigh: -0.55,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_5,
    gauss: -0.53,
    rayleigh: 0.87,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 0.3,
    rayleigh: 1.95,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 1.16,
    rayleigh: 3.17,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 1.96,
    rayleigh: 4.35,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 2.77,
    rayleigh: 5.62,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 3.6,
    rayleigh: 7.05,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 4.49,
    rayleigh: 8.76,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 5.52,
    rayleigh: 10.97,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -2.73,
    rayleigh: -1.84,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -0.25,
    rayleigh: 0.81,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 1.46,
    rayleigh: 2.69,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 2.82,
    rayleigh: 4.32,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 4.23,
    rayleigh: 5.98,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 5.21,
    rayleigh: 7.21,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 6.31,
    rayleigh: 8.63,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 7.32,
    rayleigh: 9.94,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 8.36,
    rayleigh: 11.4,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 9.5,
    rayleigh: 12.79,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 10.57,
    rayleigh: 14.6,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 11.83,
    rayleigh: 16.87,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -0.26,
    rayleigh: 0.87,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 2.27,
    rayleigh: 3.62,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 4.15,
    rayleigh: 5.88,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 5.96,
    rayleigh: 7.74,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 7.68,
    rayleigh: 9.73,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 8.92,
    rayleigh: 11.1,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 10.31,
    rayleigh: 12.75,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 11.56,
    rayleigh: 14.25,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 12.88,
    rayleigh: 15.81,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 14.27,
    rayleigh: 17.45,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 15.57,
    rayleigh: 19.39,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 17.03,
    rayleigh: 21.82,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 1.6,
    rayleigh: 2.89,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 4.3,
    rayleigh: 5.97,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 6.57,
    rayleigh: 8.46,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 8.53,
    rayleigh: 10.59,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 10.64,
    rayleigh: 12.93,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 12.1,
    rayleigh: 14.58,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 13.93,
    rayleigh: 16.54,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 15.56,
    rayleigh: 18.24,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 17.14,
    rayleigh: 20.06,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 18.76,
    rayleigh: 21.94,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 20.44,
    rayleigh: 24.01,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 22.22,
    rayleigh: 26.62,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 3.23,
    rayleigh: 4.65,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 6.17,
    rayleigh: 8.04,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 8.77,
    rayleigh: 10.85,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 11.08,
    rayleigh: 13.25,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 13.39,
    rayleigh: 15.94,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 15.3,
    rayleigh: 17.84,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 17.49,
    rayleigh: 20.15,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 19.47,
    rayleigh: 22.35,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 21.37,
    rayleigh: 24.47,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 23.43,
    rayleigh: 26.61,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 25.52,
    rayleigh: 28.82,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 27.62,
    rayleigh: 31.59,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 4.58,
    rayleigh: 6.23,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 7.85,
    rayleigh: 9.83,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 10.73,
    rayleigh: 12.95,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 13.45,
    rayleigh: 15.75,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 16.06,
    rayleigh: 18.83,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 18.22,
    rayleigh: 21.03,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 20.71,
    rayleigh: 23.68,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 23.08,
    rayleigh: 26.39,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 25.57,
    rayleigh: 28.68,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 28.12,
    rayleigh: 31.19,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 30.34,
    rayleigh: 33.82,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 32.84,
    rayleigh: 36.54,
  },
];
f341.cnShortLdpcBch = [
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -5.55,
    rayleigh: -5.06,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -3.73,
    rayleigh: -2.97,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_15,
    gauss: -2.32,
    rayleigh: -1.36,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_3,
    gauss: -1.3,
    rayleigh: -0.08,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_5,
    gauss: -0.33,
    rayleigh: 1.15,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 0.56,
    rayleigh: 2.3,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 1.37,
    rayleigh: 3.44,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 2.19,
    rayleigh: 4.7,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 2.94,
    rayleigh: 5.97,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 3.82,
    rayleigh: 7.46,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 4.7,
    rayleigh: 9.15,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 5.76,
    rayleigh: 11.56,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -2.15,
    rayleigh: -1.14,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 0.34,
    rayleigh: 1.45,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 1.99,
    rayleigh: 3.41,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 3.16,
    rayleigh: 4.78,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 4.45,
    rayleigh: 6.27,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 5.51,
    rayleigh: 7.58,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 6.51,
    rayleigh: 8.96,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 7.58,
    rayleigh: 10.28,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 8.59,
    rayleigh: 11.73,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 9.74,
    rayleigh: 13.22,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 10.81,
    rayleigh: 14.97,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 12.09,
    rayleigh: 17.44,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 0.35,
    rayleigh: 1.6,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 2.85,
    rayleigh: 4.3,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 4.65,
    rayleigh: 6.55,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 6.3,
    rayleigh: 8.29,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 7.93,
    rayleigh: 10.05,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 9.29,
    rayleigh: 11.54,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 10.56,
    rayleigh: 13.09,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 11.83,
    rayleigh: 14.62,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 13.13,
    rayleigh: 16.2,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 14.52,
    rayleigh: 17.87,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 15.85,
    rayleigh: 19.82,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 17.32,
    rayleigh: 22.44,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 2.27,
    rayleigh: 3.6,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 4.78,
    rayleigh: 6.79,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 7.19,
    rayleigh: 9.32,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 8.93,
    rayleigh: 11.16,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 10.91,
    rayleigh: 13.29,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 12.57,
    rayleigh: 15.15,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 14.25,
    rayleigh: 16.95,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 15.8,
    rayleigh: 18.64,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 17.45,
    rayleigh: 20.5,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 19.08,
    rayleigh: 22.4,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 20.78,
    rayleigh: 24.54,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 22.55,
    rayleigh: 27.23,
  },
];
f341.cnLongLdpcBch = [
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -6.23,
    rayleigh: -5.72,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -4.32,
    rayleigh: -3.62,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_15,
    gauss: -2.89,
    rayleigh: -1.97,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_1_3,
    gauss: -1.7,
    rayleigh: -0.55,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_5,
    gauss: -0.54,
    rayleigh: 0.86,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 0.3,
    rayleigh: 1.95,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 1.16,
    rayleigh: 3.16,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 1.97,
    rayleigh: 4.35,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 2.77,
    rayleigh: 5.62,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 3.6,
    rayleigh: 7.05,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 4.49,
    rayleigh: 8.76,
  },
  {
    modulation: f339.Modulation.QPSK,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 5.53,
    rayleigh: 10.97,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -2.73,
    rayleigh: -1.84,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_5,
    gauss: -0.25,
    rayleigh: 0.81,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 1.46,
    rayleigh: 2.69,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 2.82,
    rayleigh: 4.32,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 4.21,
    rayleigh: 5.98,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 5.21,
    rayleigh: 7.21,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 6.3,
    rayleigh: 8.63,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 7.32,
    rayleigh: 9.94,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 8.36,
    rayleigh: 11.4,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 9.5,
    rayleigh: 12.78,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 10.57,
    rayleigh: 14.6,
  },
  {
    modulation: f339.Modulation.QAM_16,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 11.83,
    rayleigh: 16.85,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_15,
    gauss: -0.26,
    rayleigh: 0.86,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 2.27,
    rayleigh: 3.61,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 4.15,
    rayleigh: 5.88,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 5.96,
    rayleigh: 7.74,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 7.66,
    rayleigh: 9.72,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 8.92,
    rayleigh: 11.1,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 10.31,
    rayleigh: 12.75,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 11.55,
    rayleigh: 14.25,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 12.88,
    rayleigh: 15.81,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 14.28,
    rayleigh: 17.44,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 15.57,
    rayleigh: 19.39,
  },
  {
    modulation: f339.Modulation.QAM_64,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 17.03,
    rayleigh: 21.82,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 1.6,
    rayleigh: 2.89,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 4.3,
    rayleigh: 5.97,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 6.57,
    rayleigh: 8.46,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 8.53,
    rayleigh: 10.59,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 10.61,
    rayleigh: 12.92,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 12.1,
    rayleigh: 14.58,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 13.91,
    rayleigh: 16.54,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 15.55,
    rayleigh: 18.23,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 17.13,
    rayleigh: 20.06,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 18.76,
    rayleigh: 21.94,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 20.44,
    rayleigh: 24.01,
  },
  {
    modulation: f339.Modulation.QAM_256,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 22.22,
    rayleigh: 26.62,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 3.23,
    rayleigh: 4.65,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 6.17,
    rayleigh: 8.04,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 8.77,
    rayleigh: 10.85,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 11.07,
    rayleigh: 13.25,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 13.46,
    rayleigh: 15.91,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 15.3,
    rayleigh: 17.84,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 17.46,
    rayleigh: 20.13,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 19.45,
    rayleigh: 22.34,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 21.35,
    rayleigh: 24.47,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 23.42,
    rayleigh: 26.61,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 25.52,
    rayleigh: 28.82,
  },
  {
    modulation: f339.Modulation.QAM_1024,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 27.62,
    rayleigh: 31.59,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_15,
    gauss: 4.58,
    rayleigh: 6.23,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_1_5,
    gauss: 7.85,
    rayleigh: 9.83,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_4_15,
    gauss: 10.73,
    rayleigh: 12.95,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_1_3,
    gauss: 13.45,
    rayleigh: 15.75,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_5,
    gauss: 16.04,
    rayleigh: 18.79,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_7_15,
    gauss: 18.22,
    rayleigh: 21.03,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_8_15,
    gauss: 20.69,
    rayleigh: 23.67,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_3_5,
    gauss: 23.05,
    rayleigh: 26.37,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_2_3,
    gauss: 25.55,
    rayleigh: 28.64,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_11_15,
    gauss: 28.11,
    rayleigh: 31.18,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_4_5,
    gauss: 30.34,
    rayleigh: 33.82,
  },
  {
    modulation: f339.Modulation.QAM_4096,
    coderate: f339.CodeRate.CR_13_15,
    gauss: 32.83,
    rayleigh: 36.54,
  },
];

let f340 = {};
Object.defineProperty(f340, "__esModule", {
  value: true,
});
f340.GetGuardTimeUs = M;
f340.GetGuardDistanceKm = P;

f340.GetGuardDistanceMiles = function (e, r, n) {
  return 0.621371 * P(e, r, n);
};

f340.GetGuardIntervalFractionAsString = function (e, r) {
  var n = GuardIntervalLength(e),
    t = FFTSizeValue(r);

  if (n && t) {
    var u = _(n, t),
      a = (n / u).toString() + "/" + (t / u).toString();

    return a;
  }

  return null;
};

f340.GetUsefulSymbolTime_us = b;

f340.GetSignalBandwidth = function (e, r, n) {
  var t = C(e, r),
    u = numberOfCarriers(r, n);
  return (t * u) / 1e6;
};

f340.GetPilotPatternOverhead = function (e) {
  return (1 / DxDy(e)) * 100;
};

f340.GetNumberOfCarriersReal = numberOfCarriers;
f340.GetNumberOfDataCarriers = D;

f340.GetNetBitrate_mbit_s = function (
  ScatteredPilotPattern,
  SystemBandwidth,
  FFTSize,
  BandwidthOption,
  Modulation,
  CodeRate,
  GuardInterval,
  FrameLength,
  OuterCode,
  LDPCFrameLength
) {
  var d = numberOfCarriers(FFTSize, BandwidthOption),
    f = ModulationBits(Modulation),
    _ = CodeRateValue(CodeRate),
    C = M(SystemBandwidth, FFTSize, GuardInterval),
    h = b(SystemBandwidth, FFTSize),
    O = C + h,
    g = DxDy(ScatteredPilotPattern),
    m = CommonContinualPilots(BandwidthOption, FFTSize),
    w = S(FrameLength),
    I = R(LDPCFrameLength),
    B = ((d * f * _) / O) * (1 - 1 / g) * (1 - 1 / m) * w * I;

  if (!(OuterCode !== f339.OuterCode.BCH && OuterCode !== f339.OuterCode.CRC))
    B *= 0.99444444;
  return B;
};

f340.GetFinalCN = function (
  ChannelType,
  OuterCode,
  LDPCFrameLength,
  Modulation,
  CodeRate,
  FFTSize,
  BandwidthOption,
  ScatteredPilotPattern,
  ScatteredPilotBoost,
  BackstopNoise,
  CorrectionForRealChannelEstimationdB
) {
  if (undefined === BackstopNoise) return null;
  var d, f;

  switch (ChannelType) {
    case "gauss":
      f = m(OuterCode, LDPCFrameLength, Modulation, CodeRate);
      d = f.gauss;
      break;

    case "rice":
      f = m(OuterCode, LDPCFrameLength, Modulation, CodeRate);
      d = f.rice;
      break;

    case "rayleigh":
      f = m(OuterCode, LDPCFrameLength, Modulation, CodeRate);
      d = f.rayleigh;
      break;

    default:
      d = null;
  }

  if (undefined === f) return null;

  var _ = I(
      FFTSize,
      BandwidthOption,
      ScatteredPilotPattern,
      ScatteredPilotBoost
    ),
    C = CorrectionForRealChannelEstimationdB;

  if (undefined === C) C = B(ScatteredPilotPattern, ScatteredPilotBoost);
  if (undefined === _ || undefined === C) return null;
  return d + _ + C - 10 * Math.log10(1 - 10 ** -8.644);
};

function o(SystemBandwidth, FFTSize) {
  var n = s(SystemBandwidth),
    t = FFTSizeValue(FFTSize);
  return n && t ? n * t : null;
}

function s(e) {
  switch (e) {
    case f339.SystemBandwidth.BW_6:
      return 125 / 864;

    case f339.SystemBandwidth.BW_7:
      return 78 / 629;

    case f339.SystemBandwidth.BW_8:
      return 88 / 811;
  }

  return null;
}

function FFTSizeValue(FFTSize) {
  switch (FFTSize) {
    case f339.FFTSize.K8:
      return 8192;

    case f339.FFTSize.K16:
      return 16384;

    case f339.FFTSize.K32:
      return 32768;
  }

  return null;
}

function GuardIntervalRelativeToFFTSize(GuardInterval, FFTSize) {
  var n = GuardIntervalLength(GuardInterval),
    t = FFTSizeValue(FFTSize);
  return n && t ? n / t : null;
}

function GuardIntervalLength(GuardInterval) {
  switch (GuardInterval) {
    case f339.GuardInterval.GI1_192:
      return 192;

    case f339.GuardInterval.GI2_384:
      return 384;

    case f339.GuardInterval.GI3_512:
      return 512;

    case f339.GuardInterval.GI4_768:
      return 768;

    case f339.GuardInterval.GI5_1024:
      return 1024;

    case f339.GuardInterval.GI6_1536:
      return 1536;

    case f339.GuardInterval.GI7_2048:
      return 2048;

    case f339.GuardInterval.GI8_2432:
      return 2432;

    case f339.GuardInterval.GI9_3072:
      return 3072;

    case f339.GuardInterval.GI10_3648:
      return 3648;

    case f339.GuardInterval.GI11_4096:
      return 4096;

    case f339.GuardInterval.GI12_4864:
      return 4864;
  }

  return null;
}

function _(e, r) {
  for (; 0 !== r; ) {
    var n = r;
    r = e % r;
    e = n;
  }

  return e;
}

function C(e, r) {
  var n = o(e, r);
  return n ? (result = (1 / n) * 1e6) : null;
}

function DxDy(ScatteredPilotPattern) {
  var r = h(ScatteredPilotPattern);
  return r.dx * r.dy;
}

function h(ScatteredPilotPattern) {
  return f341.scatteredPilotPattern.find(function (r) {
    return r.pattern == ScatteredPilotPattern;
  });
}

// Common Continual Pilots
// Table 8.4 Number of Common Continual Pilots in Each FFT Size
// A/322 Physical Layer Protocol
function CommonContinualPilots(BandwidthOption, FFTSize) {
  if (
    BandwidthOption === f339.BandwidthOption.BWO_0 ||
    BandwidthOption === f339.BandwidthOption.BWO_1
  )
    switch (FFTSize) {
      case f339.FFTSize.K8:
        return 48;

      case f339.FFTSize.K16:
        return 96;

      case f339.FFTSize.K32:
        return 192;
    }
  else if (BandwidthOption === f339.BandwidthOption.BWO_2)
    switch (FFTSize) {
      case f339.FFTSize.K8:
        return 47;

      case f339.FFTSize.K16:
        return 93;

      case f339.FFTSize.K32:
        return 186;
    }
  else if (BandwidthOption === f339.BandwidthOption.BWO_3)
    switch (FFTSize) {
      case f339.FFTSize.K8:
        return 46;

      case f339.FFTSize.K16:
        return 92;

      case f339.FFTSize.K32:
        return 184;
    }
  else if (BandwidthOption === f339.BandwidthOption.BWO_4)
    switch (FFTSize) {
      case f339.FFTSize.K8:
        return 45;

      case f339.FFTSize.K16:
        return 90;

      case f339.FFTSize.K32:
        return 180;
    }
  return null;
}

function ModulationBits(Modulation) {
  switch (Modulation) {
    case f339.Modulation.QPSK:
      return 2;

    case f339.Modulation.QAM_16:
      return 4;

    case f339.Modulation.QAM_64:
      return 6;

    case f339.Modulation.QAM_256:
      return 8;

    case f339.Modulation.QAM_1024:
      return 10;

    case f339.Modulation.QAM_4096:
      return 12;
  }

  return null;
}

function CodeRateValue(CodeRate) {
  switch (CodeRate) {
    case f339.CodeRate.CR_2_15:
      return 2 / 15;

    case f339.CodeRate.CR_1_5:
      return 0.2;

    case f339.CodeRate.CR_4_15:
      return 4 / 15;

    case f339.CodeRate.CR_1_3:
      return 1 / 3;

    case f339.CodeRate.CR_2_5:
      return 0.4;

    case f339.CodeRate.CR_7_15:
      return 7 / 15;

    case f339.CodeRate.CR_8_15:
      return 8 / 15;

    case f339.CodeRate.CR_3_5:
      return 0.6;

    case f339.CodeRate.CR_2_3:
      return 2 / 3;

    case f339.CodeRate.CR_11_15:
      return 11 / 15;

    case f339.CodeRate.CR_4_5:
      return 0.8;

    case f339.CodeRate.CR_13_15:
      return 13 / 15;
  }

  return null;
}

function S(FrameLength) {
  var r = O(FrameLength);
  return (r - 2.61) / r;
}

function O(FrameLength) {
  switch (FrameLength) {
    case f339.FrameLength.FL100:
      return 100;

    case f339.FrameLength.FL150:
      return 150;

    case f339.FrameLength.FL200:
      return 200;

    case f339.FrameLength.FL250:
      return 250;
  }

  return null;
}

function R(LDPCFrameLength) {
  var r = LDPCFrameLengthValue(LDPCFrameLength);
  return (r - 16) / r;
}

function LDPCFrameLengthValue(LDPCFrameLength) {
  switch (LDPCFrameLength) {
    case f339.LDPCFrameLength.L16200:
      return 16200;

    case f339.LDPCFrameLength.L64800:
      return 64800;
  }

  return null;
}

function m(OuterCode, LDPCFrameLength, Modulation, CodeRate) {
  return OuterCode === f339.OuterCode.None &&
    LDPCFrameLength === f339.LDPCFrameLength.L64800
    ? w(f341.cnLongLdpcOnly, Modulation, CodeRate)
    : OuterCode === f339.OuterCode.None &&
      LDPCFrameLength === f339.LDPCFrameLength.L16200
    ? w(f341.cnShortLdpcOnly, Modulation, CodeRate)
    : OuterCode === f339.OuterCode.BCH &&
      LDPCFrameLength === f339.LDPCFrameLength.L64800
    ? w(f341.cnLongLdpcBch, Modulation, CodeRate)
    : OuterCode === f339.OuterCode.BCH &&
      LDPCFrameLength === f339.LDPCFrameLength.L16200
    ? w(f341.cnShortLdpcBch, Modulation, CodeRate)
    : OuterCode === f339.OuterCode.CRC &&
      LDPCFrameLength === f339.LDPCFrameLength.L64800
    ? w(f341.cnLongLdpcOnly, Modulation, CodeRate)
    : OuterCode === f339.OuterCode.CRC &&
      LDPCFrameLength === f339.LDPCFrameLength.L16200
    ? w(f341.cnShortLdpcOnly, Modulation, CodeRate)
    : null;
}

function w(e, Modulation, CodeRate) {
  if (null == e) return null;
  var t = e.find(function (e) {
    return e.modulation == Modulation && e.coderate == CodeRate;
  });
  if (t) t.rice = t.gauss + 0.3;
  return t;
}

function I(
  FFTSize,
  BandwidthOption,
  ScatteredPilotPattern,
  ScatteredPilotBoost
) {
  var u =
    (D(FFTSize, BandwidthOption, ScatteredPilotPattern) +
      p(ScatteredPilotPattern, ScatteredPilotBoost) *
        ((1 / DxDy(ScatteredPilotPattern)) * z(FFTSize)) +
      CommonContinualPilots(BandwidthOption, FFTSize) * (8 / 3) ** 2) /
    numberOfCarriers(FFTSize, BandwidthOption);
  return 10 * Math.log10(u);
}

function B(ScatteredPilotPattern, ScatteredPilotBoost) {
  var n =
    1 +
    NoiseGainFactor(ScatteredPilotPattern) /
      T(ScatteredPilotPattern, ScatteredPilotBoost);
  return 10 * Math.log10(n) - 0.9;
}

function NoiseGainFactor(ScatteredPilotPattern) {
  var r = h(ScatteredPilotPattern);
  return 2 === r.dy ? 0.75 : 4 === r.dy ? 0.6875 : null;
}

function T(ScatteredPilotPattern, ScatteredPilotBoost) {
  var n = f341.scatteredPilotBoost.find(function (n) {
    return n.pattern == ScatteredPilotPattern && n.boost == ScatteredPilotBoost;
  });
  if (n) n.linear;
  return n.linear;
}

function p(e, r) {
  var n = T(e, r);
  return n * n;
}

function z(e) {
  switch (e) {
    case f339.FFTSize.K8:
      return 6913;

    case f339.FFTSize.K16:
      return 13825;

    case f339.FFTSize.K32:
      return 27649;
  }

  return null;
}

function M(SystemBandwidth, FFTSize, GuardInterval) {
  var t = o(SystemBandwidth, FFTSize),
    u = GuardIntervalRelativeToFFTSize(GuardInterval, FFTSize);
  return t && u ? t * u : null;
}

function P(e, r, n) {
  return (3e8 * M(e, r, n)) / 1e9;
}

function b(SystemBandwidth, FFTSize) {
  return o(SystemBandwidth, FFTSize);
}

function numberOfCarriers(FFTSize, BandwidthOption) {
  if (null != f341.numberOfCarriers) {
    var n = f341.numberOfCarriers.find(function (n) {
      return n.fftSize === FFTSize && n.bandwidthOption === BandwidthOption;
    });
    return n ? n.carriers : null;
  }

  return null;
}

function D(FFTSize, BandwidthOption, ScatteredPilotPattern) {
  return (
    numberOfCarriers(FFTSize, BandwidthOption) *
      (1 - 1 / DxDy(ScatteredPilotPattern)) -
    CommonContinualPilots(BandwidthOption, FFTSize)
  );
}

// var cnr = f340.GetFinalCN(
//   "gauss",
//   0, // t.OuterCode
//   0, // t.LDPCFrameLength
//   3, // t.Modulation
//   11, // t.CodeRate
//   2, // t.FFTSize
//   0, // t.BandwidthOption
//   8, // t.ScatteredPilotPattern
//   0, // t.ScatteredPilotBoost
//   -38, // t.BackstopNoise
//   undefined // t.CorrectionForRealChannelEstimationdB
// );

module.exports = f340;

// console.log(cnr);
