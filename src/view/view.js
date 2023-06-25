import { commands } from "../controller/contoler.js";
import { constants } from "../utils/constants.js";
import { getArgs, greeting } from "../utils/helpers.js";
import readline from "readline"
import { state } from "../utils/state.js";

export const createInterface = () => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  greeting()
rl.on("close", () => {
  console.log(constants.GOODBYE_MESSAGE)
})

console.log(constants.CURRENT_DIRECTORY_MESSAGE)

rl.on("line", async (data) => {
  const args = getArgs(data);
  commands[args.command] ? commands[args.command](...args.args) : console.log(constants.INVALID_INPUT)
})
}
