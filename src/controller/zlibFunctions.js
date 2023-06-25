import { createBrotliCompress, createBrotliDecompress } from "zlib";
import { getPath } from "../utils/helpers.js";
import { createReadStream, createWriteStream } from 'fs'
import { join, basename } from "path";
import { pipeline } from "stream"
import { constants } from "../utils/constants.js";

const compress = async (pathToFile, pathToDestination = "") => {
  const resolvedFilePath = getPath(pathToFile);
  const fileName = basename(resolvedFilePath)
  const resolvedGzipFilePath = getPath(join(pathToDestination, fileName + ".gz"));
  const brotliCompress = createBrotliCompress();
  const source = createReadStream(resolvedFilePath);
  const destination = createWriteStream(resolvedGzipFilePath);
  pipeline(source, brotliCompress, destination, (err) => {
    if (err) console.log(constants.OPERATION_FAILED);
  });
};

const decompress = async (gzipFilePath, pathToDestination = "") => {
  const resolvedGzipFilePath = getPath(gzipFilePath);
  const fileName = basename(resolvedGzipFilePath, ".gz")
  const resolvedFilePath = getPath(join(pathToDestination, fileName));
  const brotliDecompress = createBrotliDecompress();
  const source = createReadStream(resolvedGzipFilePath);
  const destination = createWriteStream(resolvedFilePath);
  pipeline(source, brotliDecompress, destination, (err) => {
    if (err) console.log(constants.OPERATION_FAILED);
  });
};

export { compress, decompress };
