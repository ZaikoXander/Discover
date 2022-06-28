import getFlagValue from "./flags.js"

console.log(`${getFlagValue(process.argv, "--greeting")} ${getFlagValue(process.argv, "--name")}`)
