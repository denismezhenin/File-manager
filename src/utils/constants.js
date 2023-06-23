import {state} from './state.js'

export const constants = {
  CURRENT_DIRECTORY_MESSAGE: `You are currently in ${state.currentDirectoryPath}`,
  INVALID_INPUT: "Invalid input",
  OPERATION_FAILED: "Operation failed",
  GOODBYE_MESSAGE: `Thank you for using File Manager, ${state.username}, goodbye!`,
  WELCOME_MESSAGE: `Welcome to the File Manager, ${state.username}`,
  COMMAND: 0,
  FIST_ARGUMENT: 1,
  SECOND_ARGUMENT: 2
} 