const sayMyName = () => console.log("Zaiko")
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log("discover"))

console.log(runFunction(Math.random))
