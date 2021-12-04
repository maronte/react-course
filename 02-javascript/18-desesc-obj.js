const persona = {
    nombre: 'Juan',
    edad: 20,
    clave: '123',
    direccion: {
        calle: 'Calle falsa',
        numero: '123'
     }
};

const { nombre, clave:id, edad, direccion: { calle, numero } } = persona;

console.log(`
    El usuario ${nombre} tiene ${edad} años y su clave es ${id}.
    Su dirección es ${calle} con número ${numero}.
`);