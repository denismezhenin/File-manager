import { showCurrentDir } from "../utils/helpers.js";
import { changeDirectory, showDir, upToOneDirectory } from "./dirFunctions.js";
import { copyFile, createFile, deleteFile, moveFile, readFile, renameFile } from "./filesFunctions.js";
import { calculateHash } from "./hashFunctions.js";
import { os } from "./osFunctions.js";
import { compress, decompress } from "./zlibFunctions.js";

export const commands = {
  up: () => upToOneDirectory(),
  cd: (args) => changeDirectory(args),
  ls: () => showDir(),
  cat: (args) => readFile(args),
  add: (args) => createFile(args),
  rn: (...args) => renameFile(...args),
  cp: (...args) => copyFile(...args),
  mv: (...args) => moveFile(...args),
  rm: (args) => deleteFile(args),
  os: (args) => os(args),
  hash: (args) => calculateHash(args), 
  compress: (...args) => compress(...args),
  decompress: (...args) => decompress(...args) 
}