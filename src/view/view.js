import { commands } from "../controller/contoler.js";
import { constants } from "../utils/constants.js";
import { getArgs, greeting } from "../utils/helpers.js";
import readline from "readline"

export const createInterface = () => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  // console.log(`Welcome to the File Manager, ${userName}`)
  greeting()
rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
})

// // console.log(process.cwd())
console.log(constants.CURRENT_DIRECTORY_MESSAGE)

rl.on("line", async (data) => {
  const args = getArgs(data);
  // console.log(args)
  commands[args[constants.COMMAND]](args)
// console.log(commands[args[constants.COMMAND]])


  // if (data.startsWith("ls")) {
  //   // console.log("yes")
  //   showTable()
  // } else if (data.startsWith("cd")) {
  //   const args = data.split(' ')
  //   console.log(path.isAbsolute(args[1]))
  //   const newPath = path.join(currentDirectoryPath, args[1])
  //   fs.access(newPath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
  //     currentDirectoryPath = err ? currentDirectoryPath : newPath
  //     console.log(currentDirectoryPath)
  //   })
  // } else if (data.startsWith("up")) {
  //   const newDirectoryPath = path.join(currentDirectoryPath, "/../")
  //   currentDirectoryPath = homeDirectoryPath.length > newDirectoryPath.length ? currentDirectoryPath : newDirectoryPath
  //   console.log(currentDirectoryPath)
  // } else if (data.startsWith("cat")) {
  //   const args = data.split(' ')
  //   read(args[1])
  // } else if (data.startsWith("add")) {
  //   const args = data.split(' ')
  //   create(args[1])
  // }
  // else if (data.startsWith("rn")) {
  //   const args = data.split(' ')
  //   rename(args[1], args[2])
  // }
  // else if (data.startsWith("cp")) {
  //   const args = data.split(' ')
  //   copy(args[1], args[2])
  // } else if (data.startsWith("mv")) {
  //   const args = data.split(' ')
  //   await copy(args[1], args[2])
  //   fs.unlink(args[1], err => {
  //     if (err)  console.log(err);
  // })
  // } else if (data.startsWith("rm")) {
  //   const args = data.split(' ')
  //   fs.unlink(args[1], err => {
  //     if (err)  console.log(err);
  // })
  // } else if (data === "os --EOL") {
    
  //   console.log(JSON.stringify((os.EOL)))
  // } else if (data === "os --cpus") {
  //   console.log(os.cpus())

  // } else if (data === "os --homedir") {
  //   console.log(os.homedir())
  // } else if (data === "os --username") {
  //   console.log(os.userInfo().username)
  // } else if (data === "os --architecture") {
  //   console.log(os.arch())
  // } else if (data.startsWith("hash")) {
  //   const args = data.split(' ')
  //   calculateHash(args[1])
  // } else if (data.startsWith("compress")) {
  //   const args = data.split(' ')
  //   compress(args[1], args[2])
  // } else if (data.startsWith("decompress")) {
  //   const args = data.split(' ')
  //   decompress(args[1], args[2])
  // } 

})
}


// const rl = readline.createInterface(process.stdin, process.stdout);

// console.log(`Welcome to the File Manager, ${userName}`)
// // rl.on("close", () => {
// //   console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
// // })

// // // console.log(process.cwd())
// // console.log(`You are currently in ${currentDirectoryPath}`)