const amount = 9;

if(amount < 10)
{
    console.log('small number');
}else {
    console.log('large number');
}
console.log('This is my first Node App!');

console.log(__dirname);
setInterval(() => {
    console.log('Hello World!')
}, 1000)

console.log(__dirname);
console.log(__filename)


const John = 'John'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
sayHi('Susan')
sayHi(John)

