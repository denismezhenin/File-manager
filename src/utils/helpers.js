import { constants } from "./constants.js";
import { state } from "./state.js";
import { isAbsolute, join } from "path";
const greeting = () => {
  console.log(constants.WELCOME_MESSAGE);
};

const parseArgs = (string) => {
  const argsArr = string.trim().split(" ").filter(el => el.length > 0);
  return argsArr
}
const parseArgsWithSpaces = (string) => {
  const argsArr = string.split(` "`).map(el => el.replace(/['"]+/g, '').trim()).filter(el => el.length > 0);
  return argsArr
}

const getArgs = (string) => {
  const argsArr = string.includes(`"`) ? parseArgsWithSpaces(string) : parseArgs(string)
  const command = argsArr[constants.COMMAND]
  const args = argsArr.slice(1)
  return {
    command,
    args,
  };
};

const getPath = (path) => {
  const resolvedPath = isAbsolute(path) ? path : join(state.currentDirectoryPath, path);
  return resolvedPath
};

export { greeting, getArgs, getPath };
