import { createBrotliCompress, createBrotliDecompress } from "zlib";

const compress = async (filepath, gzipFilePath) => {
  const resolvedFilePath = path.resolve(currentDirectoryPath, filepath);
  const resolvedGzipFilePath = path.join(currentDirectoryPath, gzipFilePath);
  console.log(resolvedFilePath, resolvedGzipFilePath);

  const brotliCompress = createBrotliCompress();
  const source = fs.createReadStream(resolvedFilePath);
  const destination = fs.createWriteStream(resolvedGzipFilePath);
  pipeline(source, brotliCompress, destination, (err) => {
    if (err) console.log(err);
  });
};

const decompress = async (gzipFilePath, filepath) => {
  const resolvedFilePath = path.resolve(currentDirectoryPath, filepath);
  const resolvedGzipFilePath = path.join(currentDirectoryPath, gzipFilePath);

  const brotliDecompress = createBrotliDecompress();
  const source = fs.createReadStream(resolvedGzipFilePath);
  const destination = fs.createWriteStream(resolvedFilePath);
  pipeline(source, brotliDecompress, destination, (err) => {
    if (err) console.log(err);
  });
};

export { compress, decompress };
