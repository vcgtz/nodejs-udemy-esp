// Order de ejecución: 1
console.log('Init');

// Los callback de los timeout se mandan a otra pila y se ejecutan desde allá
// por eso sus console.log son los últimos en imprimirse

// Order de ejecución: 5
setTimeout(() => {
    console.log('1st timeout');
}, 3000);

// Order de ejecución: 3
setTimeout(() => {
    console.log('2nd timeout');
}, 0);

// Order de ejecución: 4
setTimeout(() => {
    console.log('3rd timeout');
}, 0);

// Order de ejecución: 2
console.log('End');
