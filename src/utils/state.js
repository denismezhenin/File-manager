import {homedir} from 'os'

const homeDir = homedir()

export const state = {
  username: "unknown",
  homeDirectory: homeDir,
  currentDirectoryPath: homeDir,
  args: [],
}

// '/Users/Denis/rs/node/File-manager/File-manager'