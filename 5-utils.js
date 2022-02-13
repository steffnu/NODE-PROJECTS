const john = 'john'
const Peter = 'Peter'

console.log(module)
module.exports.names = {john, Peter}


const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
sayHi('Susan')
sayHi(John)

module.exports.sayHi = sayHi