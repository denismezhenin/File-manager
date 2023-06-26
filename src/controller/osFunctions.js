import { EOL, cpus, homedir, userInfo, arch } from "os"
import { constants } from "../utils/constants.js";

const getCpusInfo = () => {
  const data = cpus();
  const result = data.map((el, index) => {
    return {
      Model: el.model,
      speed: el.model.startsWith("Apple M") ? `${el.speed / 10} GHz` : `${el.speed / 1000} GHz`
    }

  })
  console.table(result)
}

export const os = (arg) => {
  switch (arg) {
    case "--EOL":
      console.log(JSON.stringify((EOL)))
      break;
    case "--cpus":
      getCpusInfo()
      break;
    case "--homedir":
      console.log(homedir())

      break;
    case "--username":
      console.log(userInfo().username)
      break;
    case "--architecture":
      console.log(arch())
      break;
      default:
        console.log(constants.INVALID_INPUT)
  }

}