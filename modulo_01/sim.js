var sim = {
    steps: {
        0: {
            titulo: '1.- Sistemas SAP',
            img: 'img/001.png',
            rubric: 'Selecciona el sistema SAP que corresponde a un entorno test.',
            elements: [{
                    element: 'div',
                    styles: 'top: 17.6%; left: 41%; height: 3.3%; width: 41.5%;',
                    correct: 'true',
                    goto: 1
                }
            ]
        }, 1: {
            titulo: '1.- Sistemas SAP',
            img: 'img/001.png',
            rubric: 'Selecciona el sistema SAP que corresponde a un entorno productivo.',
            elements: [{
                    element: 'div',
                    styles: 'top: 20.6%; left: 41%; height: 3.3%; width: 41.5%;',
                    correct: 'true',
                    goto: 2
                }
            ]
        }, 2: {
            titulo: '1.- Sistemas SAP',
            img: 'img/001.png',
            rubric: 'Selecciona el sistema SAP que corresponde HANA.',
            elements: [{
                    element: 'div',
                    styles: 'top: 14.3%; left: 41%; height: 3.3%; width: 41.5%;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '2.- Acceso a SAP LOG ON',
            img: 'img/001.png',
            rubric: 'Para el acceso a SAP entorno productivo se seleccionará la opción ECP.',
            styles: 'transform: scale(1); margin: 0;',
            elements: [{
                    element: 'div',
                    styles: 'top: 20.6%; left: 41%; height: 3.3%; width: 41.5%;',
                    correct: 'true',
                    goto: 4
                }
            ]
        }, 4: {
            titulo: '2.- Acceso a SAP LOG ON',
            img: 'img/006.png',
            styles: 'transform: scale(1.5); margin: 14% 25%;',
            rubric: 'Para el acceso a SAP entorno productivo se seleccionará la opción ECP. Debes acceder con: Mandante 010; Usuario: DEUSTO; Password: SAP2018@ e idioma Español o Inglés. Después haz click en la pantalla para continuar.',
            goto: 5,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 14.7%; left: 12%; height: 1.6%; width: 2%;',
                    correct: '010'
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.8%; left: 12%; height: 1.6%; width: 9%;',
                    correct: 'DEUSTO'
                }, {
                    element: 'input',
                    type: 'password',
                    styles: 'top: 20.9%; left: 12%; height: 1.6%; width: 9%;',
                    correct: 'SAP2018@'
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.2%; left: 12%; height: 1.6%; width: 2%;',
                    correct: 'ES,EN'
                }
            ]
        }, 5: {
            titulo: '2.- Acceso a SAP LOG ON',
            img: 'img/008.png',
            styles: 'transform: scale(1.5); margin: 14% 25%;',
            rubric: 'Modifica la contraseña del usuario de acceso y pulsa el botón de visto.',
            elements: [{
                    element: 'input',
                    type: 'password',
                    styles: 'top: 47%; left: 34%; height: 1.6%; width: 23%;',
                    correct: ''
                }, {
                    element: 'input',
                    type: 'password',
                    styles: 'top: 49.1%; left: 34%; height: 1.6%; width: 23%;',
                    correct: ''
                }, {
                    element: 'div',
                    styles: 'top: 57%; left: 54%; height: 2%; width: 2%;',
                    correct: 'true',
                    goto: 6
                }
            ]
        }, 6: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Barra de menús <',
            styles: 'transform: scale(1); margin: 0;',
            elements: [{
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'true',
                    goto: 7
                }/* , {
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 6
                } */
            ]
        }, 7: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Barra de herramientas estándar <',
            elements: [/* {
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 7
                },  */{
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'true',
                    goto: 8
                }/* , {
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 7
                }, {
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 7
                }, {
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'false',
                    goto: 7
                }, {
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 7
                } */
            ]
        }, 8: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Barra de título <',
            elements: [/* {
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 8
                }, {
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 8
                },  */{
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'true',
                    goto: 9
                }/* , {
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 8
                }, {
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'false',
                    goto: 8
                }, {
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 8
                } */
            ]
        }, 9: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Barra de herramientas de aplicación <',
            elements: [/* {
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 9
                }, {
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 9
                }, {
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 9
                },  */{
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'true',
                    goto: 10
                }/* , {
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'false',
                    goto: 9
                }, {
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 9
                } */
            ]
        }, 10: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Área de trabajo <',
            elements: [/* {
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 10
                }, {
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 10
                }, {
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 10
                }, {
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 10
                },  */{
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'true',
                    goto: 11
                }/* , {
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 10
                } */
            ]
        }, 11: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Haz clic en cada una de las partes de la pantalla de SAP que se indican. <br/> > Barra de estado <',
            elements: [/* {
                    element: 'div',
                    styles: 'top: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 11
                }, {
                    element: 'div',
                    styles: 'top: 4%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 11
                }, {
                    element: 'div',
                    styles: 'top: 7.7%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 11
                }, {
                    element: 'div',
                    styles: 'top: 11%;left: 0%;height: 3%;width: 100%;',
                    correct: 'false',
                    goto: 11
                }, {
                    element: 'div',
                    styles: 'top: 14.5%;left: 0%;height: 82%;width: 100%;',
                    correct: 'false',
                    goto: 11
                },  */{
                    element: 'div',
                    styles: 'bottom: 0%;left: 0%;height: 3%;width: 100%;',
                    correct: 'true',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/009.png',
            rubric: 'Verifica en qué sistema SAP estás trabajando.',
            goto: 13,
            elements: [{
                    element: 'div',
                    styles: 'bottom: 0%;right: 11%;height: 3%;width: 6%;',
                    correct: 'true'
                }
            ]
        }, 13: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/013.png',
            rubric: 'Verifica qué transacción está ejecutando.',
            goto: 14,
            elements: [{
                    element: 'div',
                    styles: 'bottom: 8%;right: 1%;height: 2.5%;width: 13%;',
                    correct: 'true'
                }
            ]
        }, 14: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/012.png',
            rubric: 'Genera un modo nuevo de trabajo en SAP.',
            goto: 15,
            elements: [{
                    element: 'div',
                    styles: 'top: 4%;left: 26.8%;height: 2.5%;width: 1%;',
                    correct: 'true'
                }
            ]
        }, 15: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/015.png',
            rubric: 'Cancela la transacción que estás ejecutando en este momento.',
            goto: 16,
            elements: [{
                    element: 'div',
                    styles: 'top: 18.2%;left: 0.75%;height: 2.5%;width: 9.8%;',
                    correct: 'true'
                }
            ]
        }, 16: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/016.png',
            rubric: 'Selecciona una de las 2 formas para salir de SAP.',
            goto: 17,
            elements: [{
                    element: 'div',
                    styles: 'top: 3.9%;left: 14.5%;height: 2.5%;width: 1.3%;',
                    correct: 'true'
                }
            ]
        }, 17: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/017.png',
            rubric: 'Selecciona otra forma para salir de SAP.',
            goto: 18,
            elements: [{
                    element: 'div',
                    styles: 'top: 14%;left: 0.75%;height: 2.5%;width: 9.8%;',
                    correct: 'true'
                }
            ]
        }, 18: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/018.png',
            rubric: 'Crear una nueva Carpeta en Favoritos.',
            goto: 19,
            elements: [{
                    element: 'div',
                    styles: 'top: 12.3%;left: 7.1%;height: 2.5%;width: 14.5%;',
                    correct: 'true'
                }
            ]
        }, 19: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/019.png',
            rubric: 'Llamarla Stocks.',
            goto: 20,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 30%;',
                    correct: 'Stocks',
                }, {
                    element: 'div',
                    styles: 'top: 31.5%;left: 39.5%;height: 2%;width: 1.2%;',
                    correct: 'true',
                    goto: 20
                }
            ]
        }, 20: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/020.png',
            rubric: 'Añadir la transacción MB52 a esta carpeta.',
            goto: 21,
            elements: [{
                    element: 'div',
                    styles: 'top: 14.4%;left: 7.1%;height: 2.5%;width: 14.5%;',
                    correct: 'true'
                }
            ]
        }, 21: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/021.png',
            rubric: 'Añadir la transacción MB52.',
            goto: 22,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 11%;',
                    correct: 'MB52'
                }
            ]
        }, 22: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/020.png',
            rubric: 'Añadir la transacción MB11 a esta carpeta.',
            goto: 23,
            elements: [{
                    element: 'div',
                    styles: 'top: 14.4%;left: 7.1%;height: 2.5%;width: 14.5%;',
                    correct: 'true'
                }
            ]
        }, 23: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/021.png',
            rubric: 'Añadir la transacción MB11.',
            goto: 24,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 11%;',
                    correct: 'MB11'
                }
            ]
        }, 24: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/019.png',
            rubric: 'Crear una nueva Carpeta en Favoritos como Maestros.',
            goto: 25,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 30%;',
                    correct: 'Maestros',
                    goto: 25
                }, {
                    element: 'div',
                    styles: 'top: 31.5%;left: 39.5%;height: 2%;width: 1.2%;',
                    correct: 'true',
                    goto: 25
                }
            ]
        }, 25: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/024.png',
            rubric: 'Añadirle las transacciones MM02 y MM03.',
            goto: 26,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 11%;',
                    correct: 'MM02,mm02'
                }
            ]
        }, 26: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/025.png',
            rubric: 'Añadirle las transacciones MM02 y MM03.',
            goto: 27,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 28.5%;left: 17%;height: 2%;width: 11%;',
                    correct: 'MM03,mm03'
                }
            ]
        }, 27: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/026.png',
            rubric: 'Renombra la carpeta Maestros como "Maestros Material".',
            goto: 28,
            elements: [{
                    element: 'div',
                    styles: 'top: 5.5%;left: 7.1%;height: 2.5%;width: 14.5%;',
                    correct: 'true'
                }
            ]
        }, 28: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/027.png',
            rubric: 'Renombra la carpeta Maestros como "Maestros Material".',
            goto: 30,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 29%;',
                    correct: 'Maestros Material'
                }
            ]
        }, 29: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/027.png',
            rubric: '*** MOVER ***.',
            goto: 30,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 25.5%;left: 9%;height: 2%;width: 29%;',
                    correct: 'Maestros Material'
                }
            ]
        }, 30: {
            titulo: '4.- Organización del Menú SAP',
            img: 'img/029.png',
            rubric: 'Elimina la transacción MB11 de la carpeta Stocks.',
            goto: 32,
            elements: [{
                    element: 'div',
                    styles: 'top: 29.5%;left: 11.5%;height: 2.5%;width: 15%;',
                    correct: 'true'
                }
            ]
        }, 32: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/030.png',
            rubric: 'Acceder a la transacción MIGO de 2 formas diferentes para realizar la recepción de un pedido de compra.',
            goto: 33,
            goback: 30,
            elements: [/* {
                    element: 'div',
                    styles: 'top: 4%;left: 2.6%;height: 2.5%;width: 8%;',
                    correct: 'true'
                } */,{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4%;left: 2.7%;height: 1.7%;width: 7.2%;',
                    correct: 'migo, MIGO'
                }
            ]
        }, 33: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/031.png',
            rubric: 'Acceder a la transacción MIGO de 2 formas diferentes para realizar la recepción de un pedido de compra.',
            goto: 34,
            elements: [{
                    element: 'div',
                    styles: 'top: 37%;left: 7%;height: 2%;width: 15%;',
                    correct: 'true'
                }
            ]
        }, 34: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/032.png',
            rubric: 'Lanzar la ayuda de SAP para la transacción MIGO.',
            goto: 35,
            elements: [{
                    element: 'div',
                    styles: 'top: 34.5%;left: 25.1%;height: 2%;width: 15%;',
                    correct: 'true'
                }
            ]
        }, 35: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/033.png',
            rubric: ' Localizar el campo de “Nota de Entrega” y lanza la ayuda del campo Nota de Entrega de 3 formas diferentes.',
            goto: 36,
            elements: [{
                    element: 'div',
                    styles: 'top: 23%;left: 28%;height: 2%;width: 6%;',
                    correct: 'true'
                }
            ]
        }, 36: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/035.png',
            rubric: ' Localizar el campo de “Nota de Entrega” y lanza la ayuda del campo Nota de Entrega de 3 formas diferentes.',
            goto: 37,
            elements: [{
                    element: 'div',
                    styles: 'top: 26.3%;left: 31%;height: 2%;width: 15%;',
                    correct: 'true'
                }
            ]
        }, 37: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/033.png',
            rubric: ' Localizar el campo de “Nota de Entrega” y lanza la ayuda del campo Nota de Entrega de 3 formas diferentes.',
            goto: 38,
            elements: [{
                    element: 'div',
                    styles: 'top: 4.3%;left: 29.7%;height: 2%;width: 1.1%;',
                    correct: 'true'
                }
            ]
        }, 38: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/036.png',
            rubric: 'Haz clic en la ayuda para continuar.',
            goto: 39,
            elements: [{
                    element: 'div',
                    styles: 'top: 26.3%; left: 2.7%; height: 46%; width: 23.1%;',
                    correct: 'true',
                    goto: 39
                }
            ]
        }, 39: {
            titulo: '5.- Ayuda de SAP',
            img: 'img/037.png',
            rubric: 'Localiza el número de pedido de compra “Purchase Order” a partir de la Organización de Compras, Tipo de Documento de Compras y Organización de Compras.',
            goto: 40,
            elements: [{
                    element: 'div',
                    styles: 'top: 24%; left: 24.8%; height: 2%; width: 15%;',
                    correct: 'true',
                }
            ]
        }, 40: {
            titulo: 'Fin del tutorial',
            img: 'img/038.png',
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