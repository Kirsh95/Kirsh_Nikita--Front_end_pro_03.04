let x = prompt("Введіть перше число");
let y = prompt("Введіть друге число");
let z = Number(x) + Number(y)
console.log(z);
// console.log(y);

alert(`
${x} + ${y} = ${ parseInt(x)+parseInt(y)}
${x} - ${y} = ${x - y}
${x} * ${y} = ${x * y}
${x} / ${y} = ${x / y}

`);

