import { createHash } from "crypto";
import { readFile } from "fs";
import { constants } from "../utils/constants";

export const calculateHash = async (file) => {
  readFile(file, {flags: "ax+"}, (err, data) => {
    if(err) console.log(constants.INVALID_INPUT)
    const hash = createHash("sha256");
    hash.update(data);
    const hex = hash.digest("hex");
    console.log(hex);
  })
};
