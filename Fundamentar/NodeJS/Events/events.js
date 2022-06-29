/* import { EventEmitter } from "events"

const ev = new EventEmitter()

ev.once("saySomething", (message) => {
  console.log("Eu ouvi você:", message)
})

ev.emit("saySomething", "Zaiko")
 */

import { EventEmitter } from "events"

class Character extends EventEmitter {
  constructor(name) {
    super()

    this.name = name
  }
}

const chapolin = new Character("Chapolin")
chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log("Oh! E agora, que poderá me defender?")
chapolin.emit("help")
