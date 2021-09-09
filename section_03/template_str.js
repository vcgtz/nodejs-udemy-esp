const realName = 'Bruce Wayne';
const superheroName = 'Batman';
const html = `
<h1>${superheroName}</h1>
<h2>${realName}</h2>
`;

console.log(superheroName + ' is ' + realName);
console.log(`${superheroName} is ${realName}`); // Nueva forma de imprimir variables y texto
console.log(`1 + 3 * (3 - 2) = ${1 + 3 * (3 - 2)}`); // También nos permite ejecutar instrucciones más complejas
console.log(html); // Conservan los saltos de línea
