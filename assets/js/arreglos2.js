//propiedades y metodos basicos

let juegos = ['Zelda','Mario','Metroid','Chrono'];


let ultimo = juegos[juegos.length - 1];

//el foreach va a ejecutar una instruccion para elemento del arreglo
juegos.forEach((elemento, indice, arr) => {
    console({elemento, indice, arr});
});

//para añadir al final del arreglo  

let nuevaLongitud = juegos.push('F-Zero');

console.log(nuevaLongitud, juegos);

//agrega al principio
 nuevaLongitud = juegos.unshift('Fire Emblem');
 console.log(nuevaLongitud, juegos);

 let juegoBorrado = juegos.pop();
 console.log(juegoBorrado, juegos);

 let pos = 1;
 let juegosBorrados =  juegos.splice(pos, 2);
 console.log({juegosBorrados, juegos});


 console.log('***************');

 console.log(juegos);
 let metroidIndex = juegos.indexOf('Metroid');
 console.log(metroidIndex);


 //objetos literales se considera que es una variable que tiene pares de valores


