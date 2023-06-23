// import readline from "readline"
// import os from "os"
// import fs, { write } from "fs"
// import path from "path"
// import { stdout } from "process";
// import { createHash } from "crypto";
// import { createBrotliCompress, createBrotliDecompress } from "zlib";
// import { pipeline } from "stream"

import { createInterface } from "./view/view.js";

// rl.on("line", async (data) => {
//   if (data.startsWith("ls")) {
//     // console.log("yes")
//     showTable()
//   } else if (data.startsWith("cd")) {

//   } else if (data.startsWith("up")) {

//   } else if (data.startsWith("cat")) {
//     const args = data.split(' ')
//     read(args[1])
//   } else if (data.startsWith("add")) {
//     const args = data.split(' ')
//     create(args[1])
//   }
//   else if (data.startsWith("rn")) {
//     const args = data.split(' ')
//     rename(args[1], args[2])
//   }
//   else if (data.startsWith("cp")) {
//     const args = data.split(' ')
//     copy(args[1], args[2])
//   } else if (data.startsWith("mv")) {
//     const args = data.split(' ')
//     await copy(args[1], args[2])
//     fs.unlink(args[1], err => {
//       if (err)  console.log(err);
//   })
//   } else if (data.startsWith("rm")) {
//     const args = data.split(' ')
//     fs.unlink(args[1], err => {
//       if (err)  console.log(err);
//   })
//   } else if (data === "os --EOL") {
    
//     console.log(JSON.stringify((os.EOL)))
//   } else if (data === "os --cpus") {
//     console.log(os.cpus())

//   } else if (data === "os --homedir") {
//     console.log(os.homedir())
//   } else if (data === "os --username") {
//     console.log(os.userInfo().username)
//   } else if (data === "os --architecture") {
//     console.log(os.arch())
//   } else if (data.startsWith("hash")) {
//     const args = data.split(' ')
//     calculateHash(args[1])
//   } else if (data.startsWith("compress")) {
//     const args = data.split(' ')
//     compress(args[1], args[2])
//   } else if (data.startsWith("decompress")) {
//     const args = data.split(' ')
//     decompress(args[1], args[2])
//   } 

// })


createInterface()
