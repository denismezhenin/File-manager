import { constants } from "./constants.js";
import { state } from "./state.js";
import { isAbsolute, join } from "path";
const greeting = () => {
  const userName = process.argv.slice(2).join().replace("--username=", "");
  state.username = userName ? userName : state.username;
  console.log(constants.WELCOME_MESSAGE);
};

const getArgs = (string) => {
  const args = string.split(" ");
  return args;
};

const getPath = (path) => {
  const resolvedPath = isAbsolute(path) ? path : join(path);
};

export { greeting, getArgs, getPath };
