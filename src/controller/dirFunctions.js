import { readdir, access } from "fs";
// import {isFile} from 'stat'
import { state } from "../utils/state.js";

const showDir = async (dir) => {
  fs.readdir(
    state.currentDirectoryPath,
    { withFileTypes: true },
    (err, files) => {
      if (err) throw new Error("FS operation failed");
      const filesTable = [];
      for (let file of files) {
        const ceil = {
          Name: file.name,
          Type: file.isFile() ? "file" : "directory",
        };
        filesTable.push(ceil);
      }
      console.table(filesTable);
    }
  );
};

const changeDirectory = () => {
  const args = data.split(" ");
  console.log(path.isAbsolute(args[1]));
  const newPath = path.join(currentDirectoryPath, args[1]);
  fs.access(newPath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    state.currentDirectoryPath = err ? currentDirectoryPath : newPath;
    console.log(currentDirectoryPath);
  });
};

const upToOneDirectory = (args) => {
  console.log(args)
  // const newDirectoryPath = path.join(currentDirectoryPath, "/../");
  // state.currentDirectoryPath =
  //   state.homeDirectoryPath.length > newDirectoryPath.length
  //     ? currentDirectoryPath
  //     : newDirectoryPath;
  console.log(state.currentDirectoryPath);
};

export { showDir, changeDirectory, upToOneDirectory };
