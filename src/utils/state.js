import {homedir} from 'os'

const homeDir = homedir()

const userName = process.argv.slice(2).join().replace("--username=", "");

export const state = {
  userName: userName ? userName : "unknown",
  homeDirectory: homeDir,
  currentDirectoryPath: homeDir,
  args: [],
}

// '/Users/Denis/rs/node/File-manager/File-manager'