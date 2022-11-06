// Formato Fecha yyyy/mm/dd

let excursiones = [
    {
        'ubicacion': 'Misiones',
        'descripcion': 'Excursion a la selva misionera',
        'fecha': '2023-02-11'
    },
    {
        'ubicacion': 'Misiones',
        'descripcion': 'Recorrido por el Parque Nacional Iguazu',
        'fecha': '2023-02-11'
    },
    {
        'ubicacion': 'Mendoza',
        'descripcion': 'Recorrido a viñedos mendocinos',
        'fecha': '2023-06-25'
    },
    {
        'ubicacion': 'Cordoba',
        'descripcion': 'Recorrido en Villa General Belgrano',
        'fecha': '2022-12-15'
    },
    {
        'ubicacion': 'Tierra del fuego',
        'descripcion': 'Excursion a Parque Nacional Tierra del Fuego',
        'fecha': '2022-11-28'
    }
]

let pasajesIda = [
    {
        'origen': 'Buenos Aires',
        'destino': 'Jujuy',
        'fechaIda': '2022-12-12',
        'cantidadPasajeros': 2
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Chubut',
        'fechaIda': '2023-02-11',
        'cantidadPasajeros': 4
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Neuquen',
        'fechaIda': '2023-06-25',
        'cantidadPasajeros': 3
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'La Pampa',
        'fechaIda': '2022-12-15',
        'cantidadPasajeros': 2
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Tierra del fuego',
        'fechaIda': '2022-11-28',
        'cantidadPasajeros': 1
    }
]


let pasajesIdaVuelta = [
    {
        'origen': 'Chubut',
        'destino': 'Entre rios',
        'fechaIda': '2023-01-12',
        'fechaVuelta': '2023-01-24',
        'cantidadPasajeros': 3
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Chubut',
        'fechaIda': '2023-04-15',
        'fechaVuelta': '2023-05-15',
        'cantidadPasajeros': 1
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Neuquen',
        'fechaIda': '2022-12-24',
        'fechaVuelta': '2023-01-13',
        'cantidadPasajeros': 2
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'La Pampa',
        'fechaIda': '2022-11-20',
        'fechaVuelta': '2022-12-22',
        'cantidadPasajeros': 4
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Tierra del fuego',
        'fechaIda': '2023-02-03',
        'fechaVuelta': '2023-02-20',
        'cantidadPasajeros': 2
    }
]

let paquetesIda = [
    {
        'origen': 'Chubut',
        'destino': 'Entre Rios',
        'fechaIda': '2023-01-12',
        'excursiones': [
            {
                'ubicacion': 'Entre Rios',
                'descripcion': 'Recorrido por Parque Nacional El Palmar',
                'fecha': '2023-01-15'
            },
            {
                'ubicacion': 'Entre Rios',
                'descripcion': 'Recorrido por Paseo Costanera',
                'fecha': '2023-01-18'
            }
        ]
        
    },
    {
        'origen': 'Salta',
        'destino': 'Chubut',
        'fechaIda': '2023-03-08',
        'excursiones': [
            {
                'ubicacion': 'Chubut',
                'descripcion': 'Excursión a la Península de Valdés',
                'fecha': '2023-03-12'
            }
        ]
    },
    {
        'origen': 'Tierra del fuego',
        'destino': 'Neuquen',
        'fechaIda': '2023-10-18',
        'excursiones': [
            {
                'ubicacion': 'Neuquen',
                'descripcion': 'Excursión a Bariloche',
                'fecha': '2023-10-20'
            },
            {
                'ubicacion': 'Neuquen',
                'descripcion': 'Excursión a Villa La Angostura',
                'fecha': '2023-10-21'
            },
            {
                'ubicacion': 'Neuquen',
                'descripcion': 'Excursión al Camino de los Siete Lagos',
                'fecha': '2023-10-24'
            }
        ]
    }
]

let paquetesIdaVuelta = [
    {
        'origen': 'La Pampa',
        'destino': 'Santiago del Estero',
        'fechaIda': '2023-02-25',
        'fechaVuelta': '2023-03-05',
        'excursiones':
            [
                {
                    'ubicacion': 'Santiago del Estero',
                    'descripcion': 'Excursión a Termas de Río Hondo',
                    'fecha': '2023-02-27'
                },
                {
                    'ubicacion': 'Santiago del Estero',
                    'descripcion': 'Tour por los pueblos de Santiago del Estero',
                    'fecha': '2023-02-28'
                },
                {
                    'ubicacion': 'Santiago del Estero',
                    'descripcion': 'Tour por el Estadio Único Madre de Ciudades',
                    'fecha': '2023-03-03'
                }
            ]
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Catamarca',
        'fechaIda': '2023-03-16',
        'fechaVuelta': '2023-04-01',
        'excursiones':
            [
                {
                    'ubicacion': 'Catamarca',
                    'descripcion': 'Excursión a Circuitos Franciscanos',
                    'fecha': '2023-03-20'
                },
                {
                    'ubicacion': 'Catamarca',
                    'descripcion': 'Excursión al Salar de Antofalla',
                    'fecha': '2023-03-26'
                }
            ]
    },
    {
        'origen': 'Buenos Aires',
        'destino': 'Mendoza',
        'fechaIda': '2023-06-24',
        'fechaVuelta': '2023-07-13',
        'excursiones':
            [
                {
                    'ubicacion': 'Mendoza',
                    'descripcion': 'Excursión a Bariloche',
                    'fecha': '2023-06-28'
                }
            ]
    }
]