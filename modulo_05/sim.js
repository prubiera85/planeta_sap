var sim = {
    steps: {
        0: {
            titulo: '1.	Estructuras organizativas y Datos Maestros de deudores',
            img: 'img/img_01.png',
            rubric: 'Accede a los datos maestros de deudores para el deudor con código 9001030 y comprueba en que estructura organizativa está abierto sabiendo que la sociedad es COBE.<br>Datos a comprobar: Sociedad GL Asociada y Cuenta asociada',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'FD03,fd03'
                }
            ]
        }, 1: {
            titulo: '1.	Estructuras organizativas y Datos Maestros de deudores',
            img: 'img/img_03.png',
            rubric: 'Accede a los datos maestros de deudores para el deudor con código 9001030 y comprueba en que estructura organizativa está abierto sabiendo que la sociedad es COBE.<br>Datos a comprobar: Sociedad GL Asociada y Cuenta asociada',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 17.4%;left: 12.7%;height: 1.4%;width: 7.75%;',
                    correct: '9001030'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 21.5%;left: 12.7%;height: 1.4%;width: 2.7%;',
                    correct: 'COBE,cobe'
                },
                {
                    element: 'div',
                    styles: 'top: 25%;left: 26.3%;height: 2.2%;width: 1.7%;',
                    correct: 'true',
                    goto: 2
                }
            ]
        }, 2: {
            titulo: '1.	Estructuras organizativas y Datos Maestros de deudores',
            img: 'img/img_05.png',
            rubric: 'Accede a los datos maestros de deudores para el deudor con código 9001030 y comprueba en que estructura organizativa está abierto sabiendo que la sociedad es COBE.<br>Datos a comprobar: Sociedad GL Asociada y Cuenta asociada',
            elements: [{
                    element: 'div',
                    styles: 'top: 26.5%;left: 1.7%;height: 3.1%;width: 12%;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '1.	Estructuras organizativas y Datos Maestros de deudores',
            img: 'img/img_05.png',
            rubric: 'Accede a los datos maestros de deudores para el deudor con código 9001030 y comprueba en que estructura organizativa está abierto sabiendo que la sociedad es COBE.<br>Datos a comprobar: Sociedad GL Asociada y Cuenta asociada',
            elements: [{
                    element: 'div',
                    styles: 'top: 10.5%;left: 8%;height: 3%;width: 10%;',
                    correct: 'true',
                    goto: 4
                }
            ]
        }, 4: {
            titulo: '1.	Estructuras organizativas y Datos Maestros de deudores',
            img: 'img/img_07.png',
            rubric: 'Accede a los datos maestros de deudores para el deudor con código 9001030 y comprueba en que estructura organizativa está abierto sabiendo que la sociedad es COBE.<br>Datos a comprobar: Sociedad GL Asociada y Cuenta asociada',
            elements: [{
                    element: 'div',
                    styles: 'top: 26.5%;left: 1.7%;height: 3.1%;width: 14%;',
                    correct: 'true',
                    goto: 5
                }
            ]
        }, 5: {
            titulo: '2.	Localización de un documento contable FB03',
            img: 'img/img_08.png',
            rubric: 'Localiza el documento contable 180000022 para la sociedad TOSC que pertenece al ejercicio del año 2016 y comprueba las cuentas del libro mayor.',
            goto: 6,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'FB03,fb03'
                }
            ]
        }, 6: {
            titulo: '2.	Localización de un documento contable FB03',
            img: 'img/img_09.png',
            rubric: 'Localiza el documento contable 180000022 para la sociedad TOSC que pertenece al ejercicio del año 2016 y comprueba las cuentas del libro mayor.',
            goto: 7,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.6%;left: 13%;height: 1.4%;width: 7.75%;',
                    correct: '180000022'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20.7%;left: 13%;height: 1.4%;width: 2.7%;',
                    correct: 'TOSC'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 22.8%;left: 13%;height: 1.4%;width: 2.7%;',
                    correct: '2016'
                }
            ]
        }, 7: {
            titulo: '2.	Localización de un documento contable FB03',
            img: 'img/img_11.png',
            rubric: 'Localiza el documento contable 180000022 para la sociedad TOSC que pertenece al ejercicio del año 2016 y comprueba las cuentas del libro mayor.',
            elements: [{
                element: 'div',
                styles: 'top: 10.5%;left: 25.5%;height: 3.1%;width: 11%;',
                correct: 'true',
                goto: 8
            }
        ]
        }, 8: {
            titulo: '2.	Localización de un documento contable FB03',
            img: 'img/img_13.png',
            rubric: 'Localiza el documento contable 180000022 para la sociedad TOSC que pertenece al ejercicio del año 2016 y comprueba las cuentas del libro mayor.',
            elements: [{
                    element: 'div',
                    styles: 'top: 35.6%;left: 1.2%;height: 10%;width: 44.3%;',
                    correct: 'true',
                    goto: 9
                }
            ]
        }, 9: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_14.png',
            rubric: 'Comprueba todas las partidas de clientes contabilizadas a la sociedad COBE entre el 26.01.2018 y el 30.06.2018, los clientes a los que corresponde, su importe, cuenta de libro mayo y Sociedad GL contra las que están contabilizadas.',
            goto: 10,
            elements: [{
                element: 'input',
                type: 'text',
                styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                correct: 'FBL5N,fbl5n'
            }
        ]
        }, 10: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_16.png',
            rubric: 'Comprueba todas las partidas de clientes contabilizadas a la sociedad COBE entre el 26.01.2018 y el 30.06.2018, los clientes a los que corresponde, su importe, cuenta de libro mayo y Sociedad GL contra las que están contabilizadas.',
            goto: 11,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.6%;left: 17.3%;height: 1.4%;width: 4%;',
                    correct: 'COBE'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 54.6%;left: 17.3%;height: 1.4%;width: 6.7%;',
                    correct: '26.01.2018'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 54.6%;left: 29.3%;height: 1.4%;width: 6.7%;',
                    correct: '30.06.2018'
                }
            ]
        }, 11: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_17.png',
            rubric: 'Comprueba todas las partidas de clientes contabilizadas a la sociedad COBE entre el 26.01.2018 y el 30.06.2018, los clientes a los que corresponde, su importe, cuenta de libro mayo y Sociedad GL contra las que están contabilizadas.',
            elements: [{
                    element: 'div',
                    styles: 'top: 24.7%;left: 1%;height: 27%;width: 81.5%;',
                    correct: 'true',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_18.png',
            rubric: 'Comprueba el sumatorio total de partidas abiertas a fecha 30.07.2018 que hay en todas las sociedades para el cliente con código 4400000212. Comprueba también cuenta de libro mayo y Sociedad GL contra las que están contabilizadas y n de factura.',
            goto: 13,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.5%;left: 17.3%;height: 1.4%;width: 5%;',
                    correct: '4400000212'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 39.7%;left: 17.3%;height: 1.4%;width: 6.7%;',
                    correct: '30.07.2018'
                }
            ]
        }, 13: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_19.png',
            rubric: 'Comprueba el sumatorio total de partidas abiertas a fecha 30.07.2018 que hay en todas las sociedades para el cliente con código 4400000212. Comprueba también cuenta de libro mayo y Sociedad GL contra las que están contabilizadas y n de factura.',
            goto: 14,
            elements: [{
                    element: 'div',
                    styles: 'top: 26%;left: 40.5%;height: 2.5%;width: 9%;',
                    correct: 'true'
                }
            ]
        }, 14: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_20.png',
            rubric: 'Comprueba el sumatorio total de partidas abiertas a fecha 30.07.2018 que hay en todas las sociedades para el cliente con código 4400000212. Comprueba también cuenta de libro mayo y Sociedad GL contra las que están contabilizadas y n de factura.',
            goto: 15,
            elements: [{
                    element: 'div',
                    styles: 'top: 10.75%;left: 32.5%;height: 2.5%;width: 2%;',
                    correct: 'true'
                }
            ]
        }, 15: {
            titulo: '3.	Cuentas a cobrar FI-AR: documentos contables y lista de partidas abiertas',
            img: 'img/img_21.png',
            rubric: 'Comprueba el sumatorio total de partidas abiertas a fecha 30.07.2018 que hay en todas las sociedades para el cliente con código 4400000212. Comprueba también cuenta de libro mayo y Sociedad GL contra las que están contabilizadas y n de factura.',
            goto: 16,
            elements: [{
                    element: 'div',
                    styles: 'top: 76.7%;left: 1.5%;height: 2.7%;width: 79.2%;;',
                    correct: 'true'
                }
            ]
        }, 16: {
            titulo: 'Fin del tutorial',
            img: 'img/img_21.png',
            rubric: 'Fin del tutorial<br> <a href="../index.html">Volver al menú principal</a>',
            elements: [{
                    element: 'div',
                    styles: 'display:none',
                    correct: 'true'
                }
            ]
        }
    }
};