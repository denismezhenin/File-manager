import { createReadStream, createWriteStream, unlink, rename, open, close } from 'fs'
import { basename, join, extname } from "path"
import { getPath } from '../utils/helpers.js';
import { EOL } from 'os';

const readFile = async (path) => {
  const filePath = getPath(path)
  const readStream = createReadStream(filePath, {flags: "r"});
  readStream.pipe(process.stdout);
  readStream.on("end", () => process.stdout.write(EOL));
};

const createFile = async (path) => {
  const filePath =  getPath(path)
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
  const filePath = getPath(fileName)
  const fileExtension = extname(filePath)
  const newFilePath = getPath(newFileName + fileExtension)
  rename(filePath, newFilePath, err => {
      if (err)  console.log(err);
  })
};

const copyFile = async (FilePath, FileCopyPath = "") => {
  const resolvedFilePath = getPath(FilePath)
  const fileName = basename(resolvedFilePath)
  const resolvedFileCopyPath = getPath(join(FileCopyPath, fileName))
  const readStream = createReadStream(resolvedFilePath, (err) => {
    if (err) console.log(err);
  })
  const writeStream = createWriteStream(resolvedFileCopyPath, (err) => {
    if (err) console.log(err);
  })
  readStream.pipe(writeStream)
}

const moveFile = async (FilePath, FileMovePath = "") => {
  await copyFile(FilePath, FileMovePath)
  unlink(FilePath, err => {
    if (err)  console.log(err);
})
}

const deleteFile = async(filePath) => {
  unlink(filePath, err => {
    if (err)  console.log(err);
})
}

export {deleteFile, createFile, readFile, renameFile, copyFile, moveFile}