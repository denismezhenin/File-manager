import { commands } from "../controller/controller.js";
import { constants } from "../utils/constants.js";
import { getArgs, showCurrentDir } from "../utils/helpers.js";
import readline from "readline"

export const createInterface = () => {
const rl = readline.createInterface(process.stdin, process.stdout);

showCurrentDir()

rl.on("close", () => {
  console.log(constants.GOODBYE_MESSAGE)
})

rl.on("line", async(data) => {
  if (data.startsWith(".exit")) {
    return rl.close()
  }
  const args = getArgs(data);
  commands[args.command] ? commands[args.command](...args.args) : console.log(constants.INVALID_INPUT)

  setTimeout(() => {
    showCurrentDir()
  }, 0)
  
})
} 