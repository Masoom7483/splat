
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> blob storage


// const express = require("express");
// const tilelayerRoute = express.Router();
// const { spawn } = require("child_process");
// const fs = require("fs").promises;
// const path = require("path");
// const axios = require("axios");
// const {
//   BlobServiceClient,
//   StorageSharedKeyCredential,
// } = require("@azure/storage-blob");
// require("dotenv").config();

// // tilelayerRoute.get("/", (req, res) => {
// //   const { callSign } = req.query;
// //   if (!callSign) {
// //     return res.status(400).send("Missing callSign");
// //   }
// //   res.send(`Tilelayer for ${callSign}`);
// // });

// tilelayerRoute.post("/", async (req, res) => {
//   const { lat, lon, callSign, antennaHeight, ERP } = req.body;
//   if (!callSign || !lat || !lon || !antennaHeight) {
//     return res.status(400).send("Missing callSign, lat, lon, or antennaHeight");
//   }

//   const callSignDir = path.join(__dirname, callSign);
//   const renderedDir = path.join(__dirname, "LRtiles", callSign);

//   try {
//     try {
//       await fs.access(callSignDir);
//       await fs.rm(callSignDir, { recursive: true, force: true });
//     } catch (err) {
//       // Directory does not exist, continue
//     }

//     await fs.mkdir(callSignDir, { recursive: true });

//     const qthFilePath = path.join(callSignDir, `${callSign}.qth`);
//     const lrpFilePath = path.join(callSignDir, `${callSign}.lrp`);
//     const scfFilepath = path.join(callSignDir, `${callSign}.scf`);

//     await fs.writeFile(
//       qthFilePath,
//       `${callSign}\n${lat}\n${lon}\n${antennaHeight}m`
//     );

//     await fs.writeFile(
//       lrpFilePath,
//       `15.000 ; Earth Dielectric Constant (Relative permittivity)\n0.005 ; Earth Conductivity (Siemens per meter)\n301.000 ; Atmospheric Bending Constant (N-units)\n474.000 ; Frequency in MHz (20 MHz to 20 GHz)\n5 ; Radio Climate (5 = Continental Temperate)\n0 ; Polarization (0 = Horizontal, 1 = Vertical)\n0.50 ; Fraction of situations (50% of locations)\n0.90 ; Fraction of time (90% of the time)\n${
//         ERP ? ERP : "1000000.0"
//       } ; Effective Radiated Power (ERP) in Watts (optional)`
//     );

//     await fs.writeFile(
//       scfFilepath,
//       `; SPLAT! Auto-generated Signal Color Definition
//   ;
//   ; Format for the parameters held in this file is as follows:
//   ;
//   ;    dBuV/m: red, green, blue
//   ;
//   ; ...where "dBuV/m" is the signal strength (in dBuV/m) and
//   ; "red", "green", and "blue" are the corresponding RGB color
//   ; definitions ranging from 0 to 255 for the region specified.
//   ;
//   ; The following parameters may be edited and/or expanded
//   ; for future runs of SPLAT!  A total of 32 contour regions
//   ; may be defined in this file.
//   ;
//   ;
// 80: 0, 255, 0
// 70: 173, 255, 47
// 60: 255, 255, 0
// 50: 255, 165, 0
// 40: 255, 0, 0`
//     );

//     const runSplat = (options, onComplete) => {
//       const splat = spawn("splat", options, { cwd: "./splat360" });

//       let output = "";

//       splat.stdout.on("data", (data) => {
//         output += data.toString();
//       });

//       splat.stderr.on("data", (data) => {});

//       splat.on("error", (error) => {
//         console.error(`SPLAT error: ${error.message}`);
//         if (!res.headersSent) {
//           return res
//             .status(500)
//             .send({ message: "Error running SPLAT", error: error.message });
//         }
//       });

//       splat.on("close", (code) => {
//         if (code !== 0 && !res.headersSent) {
//           return res
//             .status(500)
//             .send({ message: "SPLAT exited with non-zero status code", code });
//         }
//         onComplete(output);
//       });
//     };

//     const runPySplat = (ppmFilePath, outputDir, onComplete) => {
//       const pySplat = spawn(
//         "python3",
//         ["./pysplat_split.py", ppmFilePath, outputDir, "-z", "6-12"],
//         { cwd: "./pySplat/PySplat/PySplat" }
//       );

//       let output = "";

//       pySplat.stdout.on("data", (data) => {
//         output += data.toString();
//       });

//       pySplat.stderr.on("data", (data) => {});

//       pySplat.on("error", (error) => {
//         console.error(`PySplat error: ${error.message}`);
//         if (!res.headersSent) {
//           return res
//             .status(500)
//             .send({ message: "Error running PySplat", error: error.message });
//         }
//       });

//       pySplat.on("close", (code) => {
//         if (code !== 0 && !res.headersSent) {
//           return res.status(500).send({
//             message: "PySplat exited with non-zero status code",
//             code,
//           });
//         }
//         onComplete(output);
//       });
//     };

//     const runDownsample = (outputDir, onComplete) => {
//       const downsample = spawn(
//         "python3",
//         ["./pysplat_downsample.py", outputDir, "6", "-z", "0-5"],
//         { cwd: "./pySplat/PySplat/PySplat" }
//       );

//       let output = "";

//       downsample.stdout.on("data", (data) => {
//         output += data.toString();
//       });

//       downsample.stderr.on("data", (data) => {});

//       downsample.on("error", (error) => {
//         console.error(`PySplat Downsample error: ${error.message}`);
//         if (!res.headersSent) {
//           return res.status(500).send({
//             message: "Error running PySplat Downsample",
//             error: error.message,
//           });
//         }
//       });

//       downsample.on("close", (code) => {
//         if (code !== 0 && !res.headersSent) {
//           return res.status(500).send({
//             message: "PySplat Downsample exited with non-zero status code",
//             code,
//           });
//         }
//         onComplete(output);
//       });
//     };

//     const processSiteReport = async (filePath) => {
//       const patternCallsign = /Site Analysis Report For:\s+(.*)/;
//       const patternCoordinates =
//         /Site location:\s+(\d+\.\d+)\s+North\s+\/\s+(\d+\.\d+)\s+West/;
//       const patternTerrain =
//         /Average terrain at\s+(\d+)\s+degrees azimuth:\s+(\d+\.\d+)\s+meters AMSL/;
//       const patternAntennaHeightAgl =
//         /Antenna height:\s+(\d+\.\d+)\s+meters AGL \/ (\d+\.\d+)\s+meters AMSL/;
//       const patternAntennaHaat =
//         /Antenna height above average terrain:\s+(\d+\.\d+)\s+meters/;
//       const patternGroundElevationAmsl =
//         /Ground elevation:\s+(\d+\.\d+)\s+meters AMSL/;

//       let terrainData = [];
//       let sourceCoordinates = {
//         latitude: null,
//         longitude: null,
//       };
//       let antennaHeightAmsl = null;
//       let antennaHeightAgl = null;
//       let antennaHaat = null;
//       let groundElevationAmsl = null;
//       let callsign = null;

//       // Extract site report name from file path
//       let baseName = path.basename(filePath);
//       let siteReportName = baseName.replace("-site_report.txt", "");

//       // Read the file to extract callsign, source coordinates, and heights
//       let fileData = (await fs.readFile(filePath, "latin1")).split("\n");

//       fileData.forEach((line) => {
//         // Match callsign
//         let matchCallsign = line.match(patternCallsign);
//         if (matchCallsign) {
//           callsign = matchCallsign[1].trim();
//         }

//         // Match latitude and longitude
//         let matchCoordinates = line.match(patternCoordinates);
//         if (matchCoordinates) {
//           sourceCoordinates.latitude = parseFloat(matchCoordinates[1]);
//           sourceCoordinates.longitude = -parseFloat(matchCoordinates[2]); // Convert to negative for West
//         }

//         // Match antenna height AGL and AMSL
//         let matchAntennaHeightAgl = line.match(patternAntennaHeightAgl);
//         if (matchAntennaHeightAgl) {
//           antennaHeightAgl = parseFloat(matchAntennaHeightAgl[1]);
//           antennaHeightAmsl = parseFloat(matchAntennaHeightAgl[2]);
//         }

//         // Match antenna HAAT
//         let matchAntennaHaat = line.match(patternAntennaHaat);
//         if (matchAntennaHaat) {
//           antennaHaat = parseFloat(matchAntennaHaat[1]);
//         }

//         // Match ground elevation AMSL
//         let matchGroundElevationAmsl = line.match(patternGroundElevationAmsl);
//         if (matchGroundElevationAmsl) {
//           groundElevationAmsl = parseFloat(matchGroundElevationAmsl[1]);
//         }

//         // Match terrain data
//         let matchTerrain = line.match(patternTerrain);
//         if (matchTerrain) {
//           let terrainHeight = parseFloat(matchTerrain[2]);
//           terrainData.push(String(terrainHeight)); // Convert to string as per the example
//         }
//       });

//       // Create final JSON structure
//       let outputData = {
//         latitude: String(sourceCoordinates.latitude),
//         longitude: String(sourceCoordinates.longitude),
//         callsign: siteReportName.replace("-site_report", ""),
//         antenna_height_AMSL: String(antennaHeightAmsl),
//         antenna_height_AGL: String(antennaHeightAgl),
//         antenna_haat: String(antennaHaat),
//         ground_elevation_AMSL: String(groundElevationAmsl),
//         average_terrain_height_AMSL_per_azimuth: terrainData,
//       };

//       // Send POST request
//       let url =
//         "https://ig.mobiusdtaas.ai/tf-entity-ingestion/v1.0/schemas/668ceba8de9b343a33b8b1c4/instance?upsert=true";
//       let headers = {
//         "Content-Type": "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MTg5MjcxNjksImlhdCI6MTcxODg5MTE2OSwianRpIjoiNzlhMGZkMDktNTc0Mi00NGE4LWEwNDItZDcyYWI3ZTMyYWYzIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6WyJCT0xUWk1BTk5fQk9UIiwiUEFTQ0FMX0lOVEVMTElHRU5DRSIsIk1PTkVUIiwiYWNjb3VudCIsIlZJTkNJIl0sInN1YiI6IjMwMzdkZjZiLWE0YTUtNDE1Ni1hMTI4LWQwZTdkYTM5YzA3OCIsInR5cCI6IkJlYXJlciIsImF6cCI6IkhPTEFDUkFDWSIsInNlc3Npb25fc3RhdGUiOiJjNzE0YTU0Yi1kYjZjLTQzNDctYjJmZS1mZWZmYmU3YTczMDgiLCJuYW1lIjoibW9iaXVzIG1vYml1cyIsImdpdmVuX25hbWUiOiJtb2JpdXMiLCJmYW1pbHlfbmFtZSI6Im1vYml1cyIsInByZWZlcnJlZF91c2VybmFtZSI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbCI6InBhc3N3b3JkX3RlbmFudF9tb2JpdXNAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiQk9MVFpNQU5OX0JPVCI6eyJyb2xlcyI6WyJCT0xUWk1BTk5fQk9UX1VTRVIiXX0sIlBBU0NBTF9JTlRFTExJR0VOQ0UiOnsicm9sZXMiOlsiUEFTQ0FMX0lOVEVMTElHRU5DRV9VU0VSIl19LCJNT05FVCI6eyJyb2xlcyI6WyJNT05FVF9VU0VSIl19LCJIT0xBQ1JBQ1kiOnsicm9sZXMiOlsiSE9MQUNSQUNZX1VTRVIiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfSwiVklOQ0kiOnsicm9sZXMiOlsiVklOQ0lfVVNFUiJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImM3MTRhNTRiLWRiNmMtNDM0Ny1iMmZlLWZlZmZiZTdhNzMwOCIsInRlbmFudElkIjoiMzAzN2RmNmItYTRhNS00MTU2LWExMjgtZDBlN2RhMzljMDc4In0=.DwwruONaKN0rcezDHphMMgMkPt2XajPUiKQWADWiS06nFD-OxxGKSQ2F9xLYsNlOrDHPVLIzIChKkpk-mTSFYCEKyxB8R4jdv0AtZcvFj9yiE92i7twflCiu0z3QOM1lVitHKKLKfwEvvckZ6tGrEav0yITTiuII17XHdxAhQnbtJ130LH-rJqlVsAL66NOY1gTi5hL6b_KZ5GnmAjPC9s2PTJ3i6cDGM6vQt5E_7UNZ_aXWWRTfrgvRoHP4hh0B8kQ--WB47yURExywugSvsoacEzzGC5-PNHZoX8lkrt72S6rMW5-D1fZf5kkZhwi7mG4T0kJvkTl0V4s6PHy-rQ", // Replace with your actual access token
//       };

//       try {
//         let response = await axios.post(url, outputData, { headers });
//         console.log(`status code : ${response.status}`);
//       } catch (error) {
//         console.error(`mAINError: ${error.message}`);
//       }
//     };

//     const initialOptions = [
//       "-t",
//       path.join(callSignDir, `${callSign}.qth`),
//       "-L",
//       "10",
//       "-db 40",
//       "-metric",
//       "-o",
//       path.join(callSignDir, `${callSign}.ppm`),
//       "-kml",
//       "-ngs",
//       "-d",
//       "../sdf",
//     ];

//     runSplat(initialOptions, (initialOutput) => {
//       const geoOptions = [
//         "-t",
//         path.join(callSignDir, `${callSign}.qth`),
//         "-L",
//         "10",
//         "-db 40",
//         "-metric",
//         "-o",
//         "-geo",
//         "-ngs",
//         "-d",
//         "../sdf",
//       ];

//       runSplat(geoOptions, (geoOutput) => {
//         const ppmFilePath = path.join(
//           "..",
//           "..",
//           "..",
//           "routes",
//           "tilelayer",
//           callSign,
//           `${callSign}.ppm`
//         );

//         const outputDir = path.join("..", "..", "..", "LRtiles", callSign);
//         // console.log("outputDir:",outputDir)
//         const tilepath = path.join(__dirname,"..", "..", "LRtiles");
//         // console.log("tilepath:",tilepath)

//         runPySplat(ppmFilePath, outputDir, (pySplatOutput) => {
//           runDownsample(outputDir, async (downsampleOutput) => {
//             const siteReportPath = path.join(
//               __dirname,
//               "..",
//               "..",
//               "splat360",
//               `${callSign}-site_report.txt`
//             );
//             try {
//               await processSiteReport(siteReportPath);
//             } catch (err) {
//               console.error(`Error processing site report: ${err.message}`);
//               if (!res.headersSent) {
//                 return res.status(500).send({
//                   message: "Error processing site report",
//                   error: err.message,
//                 });
//               }
//             }

//             const blobServiceClient = new BlobServiceClient(
//               `https://${accountName}.blob.core.windows.net/`,
//               new StorageSharedKeyCredential(
//                 accountName,
//                 process.env.BLOB_SAS_KEY
//               )
//             );
//             const containerClient =
//               blobServiceClient.getContainerClient(containerName);
//             await uploadFolderToAzureBlob(tilepath, containerClient);

//             if (!res.headersSent) {
//               res.send(
//                 "Tile layer is generated and uploaded to Azure Blob Storage"
//               );
//             }
//           });
//         });
//       });
//     });
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     if (!res.headersSent) {
//       res.status(500).send("Error handling request");
//     }
//   }
// });

// const uploadFolderToAzureBlob = async (folderPath, containerClient) => {
//   const uploadFile = async (filePath) => {
//     const blobName = path.relative(folderPath, filePath);
//     const blockBlobClient = containerClient.getBlockBlobClient(blobName);
//     await blockBlobClient.uploadFile(filePath);
//     console.log(`Uploaded file: ${blobName}`);
//   };

//   const uploadDirectory = async (dir) => {
//     const files = await fs.readdir(dir);
//     for (const file of files) {
//       const fullPath = path.join(dir, file);
//       const stat = await fs.lstat(fullPath);
//       if (stat.isDirectory()) {
//         await uploadDirectory(fullPath);
//       } else {
//         await uploadFile(fullPath);
//       }
//     }
//   };

//   await uploadDirectory(folderPath);
//   console.log("Folder uploaded to Azure Blob Storage successfully!");
// };

// const accountName = "lrttiles";
// const containerName = "$web";

// const blobStorageKey = process.env.BLOB_SAS_KEY;
// // console.log(blobStorageKey);

// module.exports = tilelayerRoute;



// >>>>>>>>>>>>>>>    updated

const express = require("express");
const tilelayerRoute = express.Router();
const { spawn } = require("child_process");
const fs = require("fs").promises;
const path = require("path");
const axios = require("axios");
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
require("dotenv").config();

tilelayerRoute.post("/", async (req, res) => {
  const { lat, lon, callSign, antennaHeight, ERP } = req.body;
  if (!callSign || !lat || !lon || !antennaHeight) {
    return res.status(400).send("Missing callSign, lat, lon, or antennaHeight");
  }

  const callSignDir = path.join(__dirname, callSign);
  const renderedDir = path.join(__dirname, "LRtiles", callSign);

  try {
    try {
      await fs.access(callSignDir);
      await fs.rm(callSignDir, { recursive: true, force: true });
    } catch (err) {
      // Directory does not exist, continue
    }

    await fs.mkdir(callSignDir, { recursive: true });

    const qthFilePath = path.join(callSignDir, `${callSign}.qth`);
    const lrpFilePath = path.join(callSignDir, `${callSign}.lrp`);
    const scfFilePath = path.join(callSignDir, `${callSign}.scf`);

    await fs.writeFile(
      qthFilePath,
      `${callSign}\n${lat}\n${lon}\n${antennaHeight}m`
    );

    await fs.writeFile(
      lrpFilePath,
      `15.000 ; Earth Dielectric Constant (Relative permittivity)\n0.005 ; Earth Conductivity (Siemens per meter)\n301.000 ; Atmospheric Bending Constant (N-units)\n474.000 ; Frequency in MHz (20 MHz to 20 GHz)\n5 ; Radio Climate (5 = Continental Temperate)\n0 ; Polarization (0 = Horizontal, 1 = Vertical)\n0.50 ; Fraction of situations (50% of locations)\n0.90 ; Fraction of time (90% of the time)\n${
        ERP ? ERP : "1000000.0"
      } ; Effective Radiated Power (ERP) in Watts (optional)`
    );

    await fs.writeFile(
      scfFilePath,
      `; SPLAT! Auto-generated Signal Color Definition
;
; Format for the parameters held in this file is as follows:
;
;    dBuV/m: red, green, blue
;
; ...where "dBuV/m" is the signal strength (in dBuV/m) and
; "red", "green", and "blue" are the corresponding RGB color
; definitions ranging from 0 to 255 for the region specified.
;
; The following parameters may be edited and/or expanded
; for future runs of SPLAT!  A total of 32 contour regions
; may be defined in this file.
;
;
80: 0, 255, 0
70: 173, 255, 47
60: 255, 255, 0
50: 255, 165, 0
40: 255, 0, 0`
    );

    const runSplat = (options, onComplete) => {
      const splat = spawn("splat", options, { cwd: "./splat360" });

      let output = "";

      splat.stdout.on("data", (data) => {
        output += data.toString();
      });

      splat.stderr.on("data", (data) => {});

      splat.on("error", (error) => {
        console.error(`SPLAT error: ${error.message}`);
        if (!res.headersSent) {
          return res
            .status(500)
            .send({ message: "Error running SPLAT", error: error.message });
        }
      });

      splat.on("close", (code) => {
        if (code !== 0 && !res.headersSent) {
          return res
            .status(500)
            .send({ message: "SPLAT exited with non-zero status code", code });
        }
        onComplete(output);
      });
    };

    const runPySplat = (ppmFilePath, outputDir, onComplete) => {
      const pySplat = spawn(
        "python3",
        ["./pysplat_split.py", ppmFilePath, outputDir, "-z", "6-12"],
        { cwd: "./pySplat/PySplat/PySplat" }
      );

      let output = "";

      pySplat.stdout.on("data", (data) => {
        output += data.toString();
      });

      pySplat.stderr.on("data", (data) => {});

      pySplat.on("error", (error) => {
        console.error(`PySplat error: ${error.message}`);
        if (!res.headersSent) {
          return res
            .status(500)
            .send({ message: "Error running PySplat", error: error.message });
        }
      });

      pySplat.on("close", (code) => {
        if (code !== 0 && !res.headersSent) {
          return res.status(500).send({
            message: "PySplat exited with non-zero status code",
            code,
          });
        }
        onComplete(output);
      });
    };

    const runDownsample = (outputDir, onComplete) => {
      const downsample = spawn(
        "python3",
        ["./pysplat_downsample.py", outputDir, "6", "-z", "0-5"],
        { cwd: "./pySplat/PySplat/PySplat" }
      );

      let output = "";

      downsample.stdout.on("data", (data) => {
        output += data.toString();
      });

      downsample.stderr.on("data", (data) => {});

      downsample.on("error", (error) => {
        console.error(`PySplat Downsample error: ${error.message}`);
        if (!res.headersSent) {
          return res.status(500).send({
            message: "Error running PySplat Downsample",
            error: error.message,
          });
        }
      });

      downsample.on("close", (code) => {
        if (code !== 0 && !res.headersSent) {
          return res.status(500).send({
            message: "PySplat Downsample exited with non-zero status code",
            code,
          });
        }
        onComplete(output);
      });
    };

    const processSiteReport = async (filePath) => {
      const patternCallsign = /Site Analysis Report For:\s+(.*)/;
      const patternCoordinates =
        /Site location:\s+(\d+\.\d+)\s+North\s+\/\s+(\d+\.\d+)\s+West/;
      const patternTerrain =
        /Average terrain at\s+(\d+)\s+degrees azimuth:\s+(\d+\.\d+)\s+meters AMSL/;
      const patternAntennaHeightAgl =
        /Antenna height:\s+(\d+\.\d+)\s+meters AGL \/ (\d+\.\d+)\s+meters AMSL/;
      const patternAntennaHaat =
        /Antenna height above average terrain:\s+(\d+\.\d+)\s+meters/;
      const patternGroundElevationAmsl =
        /Ground elevation:\s+(\d+\.\d+)\s+meters AMSL/;

      let terrainData = [];
      let sourceCoordinates = {
        latitude: null,
        longitude: null,
      };
      let antennaHeightAmsl = null;
      let antennaHeightAgl = null;
      let antennaHaat = null;
      let groundElevationAmsl = null;
      let callsign = null;

      // Extract site report name from file path
      let baseName = path.basename(filePath);
      let siteReportName = baseName.replace("-site_report.txt", "");

      // Read the file to extract callsign, source coordinates, and heights
      let fileData = (await fs.readFile(filePath, "latin1")).split("\n");

      fileData.forEach((line) => {
        // Match callsign
        let matchCallsign = line.match(patternCallsign);
        if (matchCallsign) {
          callsign = matchCallsign[1].trim();
        }

        // Match latitude and longitude
        let matchCoordinates = line.match(patternCoordinates);
        if (matchCoordinates) {
          sourceCoordinates.latitude = parseFloat(matchCoordinates[1]);
          sourceCoordinates.longitude = -parseFloat(matchCoordinates[2]); // Convert to negative for West
        }

        // Match antenna height AGL and AMSL
        let matchAntennaHeightAgl = line.match(patternAntennaHeightAgl);
        if (matchAntennaHeightAgl) {
          antennaHeightAgl = parseFloat(matchAntennaHeightAgl[1]);
          antennaHeightAmsl = parseFloat(matchAntennaHeightAgl[2]);
        }

        // Match antenna HAAT
        let matchAntennaHaat = line.match(patternAntennaHaat);
        if (matchAntennaHaat) {
          antennaHaat = parseFloat(matchAntennaHaat[1]);
        }

        // Match ground elevation AMSL
        let matchGroundElevationAmsl = line.match(patternGroundElevationAmsl);
        if (matchGroundElevationAmsl) {
          groundElevationAmsl = parseFloat(matchGroundElevationAmsl[1]);
        }

        // Match terrain data
        let matchTerrain = line.match(patternTerrain);
        if (matchTerrain) {
          let terrainHeight = parseFloat(matchTerrain[2]);
          terrainData.push(String(terrainHeight)); // Convert to string as per the example
        }
      });

      // Create final JSON structure
      let outputData = {
        latitude: String(sourceCoordinates.latitude),
        longitude: String(sourceCoordinates.longitude),
        callsign: siteReportName.replace("-site_report", ""),
        antenna_height_AMSL: String(antennaHeightAmsl),
        antenna_height_AGL: String(antennaHeightAgl),
        antenna_haat: String(antennaHaat),
        ground_elevation_AMSL: String(groundElevationAmsl),
        average_terrain_height_AMSL_per_azimuth: terrainData,
      };

      // Send POST request
      let url =
        "https://ig.mobiusdtaas.ai/tf-entity-ingestion/v1.0/schemas/668ceba8de9b343a33b8b1c4/instance?upsert=true";
      let headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      };

      try {
        let response = await axios.post(url, outputData, { headers });
        console.log(`status code : ${response.status}`);
      } catch (error) {
        console.error(`mAINError: ${error.message}`);
      }
    };

    const initialOptions = [
      "-t",
      path.join(callSignDir, `${callSign}.qth`),
      "-L",
      "10",
      "-db 40",
      "-metric",
      "-o",
      path.join(callSignDir, `${callSign}.ppm`),
      "-kml",
      "-ngs",
      "-d",
      "../sdf",
    ];

    runSplat(initialOptions, (initialOutput) => {
      const geoOptions = [
        "-t",
        path.join(callSignDir, `${callSign}.qth`),
        "-L",
        "10",
        "-db 40",
        "-metric",
        "-o",
        "-geo",
        "-ngs",
        "-d",
        "../sdf",
      ];

      runSplat(geoOptions, (geoOutput) => {
        const ppmFilePath = path.join(
          "..",
          "..",
          "..",
          "routes",
          "tilelayer",
          callSign,
          `${callSign}.ppm`
        );

        const outputDir = path.join("..", "..", "..", "LRtiles", callSign);

        runPySplat(ppmFilePath, outputDir, (pySplatOutput) => {
          runDownsample(outputDir, async (downsampleOutput) => {
            const siteReportPath = path.join(
              __dirname,
              "..",
              "..",
              "splat360",
              `${callSign}-site_report.txt`
            );
            try {
              await processSiteReport(siteReportPath);
            } catch (err) {
              console.error(`Error processing site report: ${err.message}`);
              if (!res.headersSent) {
                return res.status(500).send({
                  message: "Error processing site report",
                  error: err.message,
                });
              }
            }

            const blobServiceClient = new BlobServiceClient(
              `https://${accountName}.blob.core.windows.net/`,
              new StorageSharedKeyCredential(
                accountName,
                process.env.BLOB_SAS_KEY
              )
            );
            const containerClient =
              blobServiceClient.getContainerClient(containerName);
            await uploadFolderToAzureBlob(outputDir, containerClient);

            if (!res.headersSent) {
              res.send(
                "Tile layer is generated and uploaded to Azure Blob Storage"
              );
            }
          });
        });
      });
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    if (!res.headersSent) {
      res.status(500).send("Error handling request");
    }
  }
});

const uploadFolderToAzureBlob = async (folderPath, containerClient) => {
  const uploadFile = async (filePath) => {
    const blobName = path.relative(folderPath, filePath);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadFile(filePath);
    console.log(`Uploaded file: ${blobName}`);
  };

  const uploadDirectory = async (dir) => {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.lstat(fullPath);
      if (stat.isDirectory()) {
        await uploadDirectory(fullPath);
      } else {
        await uploadFile(fullPath);
      }
    }
  };

  await uploadDirectory(folderPath);
  console.log("Folder uploaded to Azure Blob Storage successfully!");
};

const accountName = "lrttiles";
const containerName = "$web";

module.exports = tilelayerRoute;
