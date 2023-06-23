// import exp from 'constants';
import { createReadStream, createWriteStream, unlink, rename, open, close } from 'fs'

const readFile = async (file) => {
  const filePath = path.join(currentDirectoryPath, file)
  const readStream = createReadStream(filePath, {flags: "r"});
  readStream.pipe(stdout);
  readStream.on("end", () => os.EOL());
};

const createFile = async (file) => {
  const filePath = path.join(currentDirectoryPath, file)
  open(filePath, "ax+", (err, fd) => {
    err ? console.log(err) : null;
    if (fd) {
      close(fd, err => {
        err ? null : null;
      })
    }
  })
}

const renameFile = async (fileName, newFileName) => {
  // const filePath = path.resolve(currentDirectoryPath, fileName)
  // const newFilePath = path.resolve(path, pathnewFileName)

  rename(fileName, newFileName, err => {
      if (err)  console.log(err);
  })

  // Write your code here 
};

const copyFile = async (filePath, fileCopyPath) => {
  const resolvedFilePath = path.resolve(currentDirectoryPath, filePath)
  const resolvedFileCopyPath = path.join(currentDirectoryPath, fileCopyPath)
  console.log(resolvedFileCopyPath)
  const readStream = createReadStream(resolvedFilePath, (err) => {
    if (err) console.log(err);
  })
  const writeStream = createWriteStream(filePath, (err) => {
    if (err) console.log(err);
  })
  readStream.pipe(writeStream)
}

const moveFile = async () => {
  const args = data.split(' ')
  await copy(args[1], args[2])
  unlink(args[1], err => {
    if (err)  console.log(err);
})
}

const deleteFile = async() => {
  const args = data.split(' ')
  unlink(args[1], err => {
    if (err)  console.log(err);
})
}

export {deleteFile, createFile, readFile, renameFile, copyFile, moveFile}