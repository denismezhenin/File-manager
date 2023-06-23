import { createHash } from "crypto";

export const calculateHash = async (file) => {
  fs.readFile(file, {flags: "ax+"}, (err, data) => {
    if(err) console.log(err)
    const hash = createHash("sha256");
    hash.update(data);
    const hex = hash.digest("hex");
    console.log(hex);
  })
};
