// import { changeDirectory, showDir, upToOneDirectory } from "./dirFunctions.js";
// import { copyFile, createFile, deleteFile, moveFile, readFile, renameFile } from "./filesFunctions.js";
// import { calculateHash } from "./hashFunctions.js";
// import { os } from "./osFunctions.js";
// import { compress, decompress } from "./zlibFunctions.js";
import { upToOneDirectory } from "./dirFunctions.js";

export const commands = {
  up: (args)=> upToOneDirectory(args),
  // "cd": changeDirectory(),
  // "ls": showDir(),
  // "cat": readFile(),
  // "add": createFile(),
  // "rn": renameFile(),
  // "cp": copyFile(),
  // "mv": moveFile(),
  // "rm": deleteFile(),
  // "os": os(),
  // "hash": calculateHash(), 
  // "compress": compress(),
  // "decompress": decompress() 
}