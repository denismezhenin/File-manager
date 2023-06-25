import {state} from './state.js'

export const constants = {
  CURRENT_DIRECTORY_MESSAGE: `You are currently in `,
  INVALID_INPUT: "Invalid input",
  OPERATION_FAILED: "Operation failed",
  GOODBYE_MESSAGE: `Thank you for using File Manager, ${state.userName}, goodbye!`,
  WELCOME_MESSAGE: `Welcome to the File Manager, ${state.userName}`,
  COMMAND: 0,
} 