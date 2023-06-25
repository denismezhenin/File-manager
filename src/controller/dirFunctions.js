import { readdir, access, constants as fsConstants } from "fs";
import { join } from "path";
import { constants } from "../utils/constants.js";
import { getPath } from "../utils/helpers.js";
import { state } from "../utils/state.js";

const showDir = async () => {
  readdir(state.currentDirectoryPath, { withFileTypes: true }, (err, files) => {
    if (err) console.log(constants.INVALID_INPUT);
    const filesTable = [];
    for (let file of files) {
      const ceil = {
        Name: file.name,
        Type: file.isFile() ? "file" : "directory",
      };
      filesTable.push(ceil);
    }
    console.table(filesTable);
  });
};

const changeDirectory = (path) => {
  const newPath = getPath(path);
  access(newPath, fsConstants.R_OK | fsConstants.W_OK, (err) => {
    console.log(constants.INVALID_INPUT);
    state.currentDirectoryPath = err
      ? state.currentDirectoryPath
      : state.homeDirectory.length > newPath.length
      ? state.currentDirectoryPath
      : newPath;
    console.log(state.currentDirectoryPath);
  });
};

const upToOneDirectory = () => {
  const newDirectoryPath = join(state.currentDirectoryPath, "/../");
  state.currentDirectoryPath =
    state.homeDirectory.length > newDirectoryPath.length
      ? state.currentDirectoryPath
      : newDirectoryPath;
  console.log(state.currentDirectoryPath);
};

export { showDir, changeDirectory, upToOneDirectory };
