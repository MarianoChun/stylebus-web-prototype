// Formato Fecha yyyy/mm/dd

function Excursion(ubicacion, descripcion, fecha, precio){
    this.ubicacion = ubicacion;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.precio = precio;
}

function Pasaje(origen, destino, fechaIda, fechaVuelta, cantidadPasajes, precio){
    this.origen = origen;
    this.destino = destino;
    this.fechaIda = fechaIda;
    this.fechaVuelta = fechaVuelta;
    this.cantidadPasajes = cantidadPasajes;
    this.precio = precio;
}

function Paquete(origen, destino, fechaIda, fechaVuelta, excursiones, precio){
    this.origen = origen;
    this.destino = destino;
    this.fechaIda = fechaIda;
    this.fechaVuelta = fechaVuelta;
    this.excursiones = excursiones;
    this.precio = precio;
}
let excursiones = [
    new Excursion('San Luis', 'Excursión a Circuito Serrano Grande', '2023-06-02', 5000),
    new Excursion('Misiones', 'Excursion a la selva misionera', '2023-02-11', 4000),
    new Excursion('Misiones', 'Recorrido por el Parque Nacional Iguazu', '2023-02-11', 8000),
    new Excursion('Mendoza', 'Recorrido a viñedos mendocinos', '2023-06-25', 2000),
    new Excursion('Cordoba', 'Recorrido en Villa General Belgrano', '2022-12-15', 5000),
    new Excursion('Tierra del fuego', 'Excursion a Parque Nacional Tierra del Fuego', '2022-11-28', 3000),
]

let pasajes = [
    // Ida
    new Pasaje('Buenos Aires', 'Jujuy', '2022-12-12', '', 30, 15000),
    new Pasaje('Buenos Aires', 'Chubut', '2023-02-11', '', 20, 12000),
    new Pasaje('Buenos Aires', 'Neuquen', '2023-06-25', '', 12, 13000),
    new Pasaje('Buenos Aires', 'La Pampa', '2022-12-15', '', 25, 9000),
    new Pasaje('Buenos Aires', 'Tierra del fuego', '2022-11-28', '', 16, 10000),
    // Ida y Vuelta
    new Pasaje('Chubut', 'Entre rios', '2023-01-12', '2023-01-24', 25, 20000),
    new Pasaje('Buenos Aires', 'Chubut', '2023-04-15', '2023-05-15', 12, 23000),
    new Pasaje('Buenos Aires', 'Neuquen', '2022-12-24', '2023-01-13', 28, 22500),
    new Pasaje('Buenos Aires', 'La Pampa', '2022-11-20', '2022-12-22', 14, 19500),
    new Pasaje('Buenos Aires', 'Tierra del fuego', '2023-02-03', '2023-02-20', 8, 24600),
]


let paquetes = [
    // Ida
    new Paquete('Chubut', 'Entre Rios', '2023-01-12', '', 
    [
        new Excursion('Entre Rios', 'Recorrido por Parque Nacional El Palmar', '2023-01-15'),
        new Excursion('Entre Rios', 'Recorrido por Paseo Costanera', '2023-01-18')
    ], 26800), 
    new Paquete('Salta', 'Chubut', '2023-03-08', '', 
    [
        new Excursion('Chubut', 'Excursión a la Península de Valdés', '2023-03-12')
    ], 28000),  
    new Paquete('Tierra del fuego', 'Neuquen', '2023-10-18', '', 
    [
        new Excursion('Neuquen', 'Excursión a Bariloche', '2023-10-20'),
        new Excursion('Neuquen', 'Excursión a Villa La Angostura', '2023-10-21'),
        new Excursion('Neuquen', 'Excursión al Camino de los Siete Lagos', '2023-10-24')
    ], 29500),  
    // Ida y Vuelta
    new Paquete('La Pampa', 'Santiago del Estero', '2023-02-25', '2023-03-05', 
    [
        new Excursion('Santiago del Estero', 'Excursión a Termas de Río Hondo', '2023-02-27'),
        new Excursion('Santiago del Estero', 'Tour por los pueblos de Santiago del Estero', '2023-02-28'),
        new Excursion('Santiago del Estero', 'Tour por el Estadio Único Madre de Ciudades', '2023-03-03')
    ], 33000), 
    new Paquete('Buenos Aires', 'Catamarca', '2023-03-16', '2023-04-01', 
    [
        new Excursion('Catamarca', 'Excursión a Circuitos Franciscanos', '2023-03-20'),
        new Excursion('Catamarca', 'Excursión al Salar de Antofalla', '2023-03-26')
    ], 35000), 
    new Paquete('Buenos Aires', 'Mendoza', '2023-06-24', '2023-07-13', 
    [
        new Excursion('Mendoza', 'Excursión a bodegas mendocinas', '2023-07-05')
    ], 34300), 
]

