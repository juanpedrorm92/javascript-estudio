//los objetos literales son como los diccionarios


const personaje = {
    nombre: 'Hola mundo',
    codeName:'Iroman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V','Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

// console.log('Nombre', personaje.nombre);
// console.log('Nombre',personaje['nombre']);
// console.log('Edad',personaje.edad);

// console.log('Coors',personaje.coords.lat);

// console.log('No trajes',personaje.trajes.length);

// console.log('No trajes',personaje.trajes[personaje.trajes.length - 1]); //ultimo elemento


//eliminar una propiedad
delete personaje.edad;


//cuando es constante el objeto no se puede volver a inicializar pero si puede mutar.
// personaje = {};


const entriesPares = Object.entries( personaje );
console.log(entriesPares  );

//lo congela en el momento que hace esta instruccion por lo tanto si quiero añadirn una nueva propiedad no va a tener efectos, esto tiene
//un efecto en las propiedades directas pero no a los objetos que estan dentro de este objeto 
Object.freeze( personaje );
personaje.dinero = 10000000;
personaje.casado =  true;
personaje.direccion.ubicacion = 'Costa rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores );
