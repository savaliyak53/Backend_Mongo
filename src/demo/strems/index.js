const fs = require("node:fs");

const readbleStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 5,
});

const writeableStrem = fs.createWriteStream("./file.txt");

// readbleStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStrem.write(chunk);
// });

const pip = readbleStream.pipe(writeableStrem);
console.log(pip);

readableStream.on("end", () => {
  console.log("Reading and writing completed.");
});

readableStream.on("error", (err) => {
  console.error("Error in readable stream:", err);
});

writableStream.on("error", (err) => {
  console.error("Error in writable stream:", err);
});
