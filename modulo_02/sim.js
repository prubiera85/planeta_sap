var sim = {
    steps: {
        0: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_01.png',
            rubric: 'Accede a los datos maestros del material con código 4091 y modo visualización y localiza su peso bruto, peso neto, sus unidades de conversión y el código EAN de la caja.',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MM03,mm03'
                }
            ]
        }, 1: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_03.png',
            rubric: 'Accede a los datos maestros del material con código 4091 y modo visualización y localiza su peso bruto, peso neto, sus unidades de conversión y el código EAN de la caja.',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.5%;left: 9.3%;height: 1.4%;width: 8.75%;',
                    correct: '4091'
                }
            ]
        }, 2: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_05.png',
            rubric: 'Accede a los datos maestros del material con código 4091 y modo visualización y localiza su peso bruto, peso neto, sus unidades de conversión y el código EAN de la caja.',
            elements: [{
                    element: 'div',
                    styles: 'top: 24%;left: 21%;height: 2.1%;width: 18%;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_06.png',
            rubric: 'Marca el peso bruto del material.',
            elements: [{
                    element: 'div',
                    styles: 'top: 44.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'true',
                    goto: 4
                }, {
                    element: 'div',
                    styles: 'top: 46.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 3
                }, {
                    element: 'div',
                    styles: 'top: 52.6%;left: 2%;height: 2%;width: 19%;',
                    correct: 'false',
                    goto: 3
                }, {
                    element: 'div',
                    styles: 'top: 73.6%;left: 2%;height: 11.7%;width: 39.3%;',
                    correct: 'false',
                    goto: 3
                }
            ]
        }, 4: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_06.png',
            rubric: 'Marca el peso neto del material.',
            elements: [{
                    element: 'div',
                    styles: 'top: 44.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 4
                }, {
                    element: 'div',
                    styles: 'top: 46.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'true',
                    goto: 5
                }, {
                    element: 'div',
                    styles: 'top: 52.6%;left: 2%;height: 2%;width: 19%;',
                    correct: 'false',
                    goto: 4
                }, {
                    element: 'div',
                    styles: 'top: 73.6%;left: 2%;height: 11.7%;width: 39.3%;',
                    correct: 'false',
                    goto: 4
                }
            ]
        }, 5: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_06.png',
            rubric: 'Marca el código EAN.',
            elements: [{
                    element: 'div',
                    styles: 'top: 44.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 5
                }, {
                    element: 'div',
                    styles: 'top: 46.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 5
                }, {
                    element: 'div',
                    styles: 'top: 52.6%;left: 2%;height: 2%;width: 19%;',
                    correct: 'true',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 73.6%;left: 2%;height: 11.7%;width: 39.3%;',
                    correct: 'false',
                    goto: 5
                }
            ]
        }, 6: {
            titulo: '1.	Datos Maestro de Materiales',
            img: 'img/img_06.png',
            rubric: 'Marca el recuadro de las unidades de conversión.',
            elements: [{
                    element: 'div',
                    styles: 'top: 44.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 46.25%; left: 2%;height: 2%;width: 18.5%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 52.6%;left: 2%;height: 2%;width: 19%;',
                    correct: 'false',
                    goto: 6
                }, {
                    element: 'div',
                    styles: 'top: 73.6%;left: 2%;height: 11.7%;width: 39.3%;',
                    correct: 'true',
                    goto: 7
                }
            ]
        }, 7: {
            titulo: '2.	Datos Maestro de Proveedores',
            img: 'img/img_01.png',
            rubric: 'Comprueba los datos de compras para el proveedor con código 311491 en la Organización de Compras ECOP',
            goto: 8,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MK03,mk03'
                }
            ]
        }, 8: {
            titulo: '2.	Datos Maestro de Proveedores',
            img: 'img/img_11.png',
            rubric: 'Comprueba los datos de compras para el proveedor con código 311491 en la Organización de Compras ECOP',
            goto: 9,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.75%;left: 12.2%;height: 1.3%;width: 7.6%;',
                    correct: '311491'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20.85%;left: 12.2%;height: 1.3%;width: 2.9%;',
                    correct: 'ECOP,ecop'
                }
            ]
        }, 9: {
            titulo: '2.	Datos Maestro de Proveedores',
            img: 'img/img_12.png',
            rubric: 'Seleccionar todas las vistas y hacer click en la pantalla.',
            goto: 10,
            elements: [{
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 27.1%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }, {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 29.35%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }, {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 31.3%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }, {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 33.5%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }, {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 39.9%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }, {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 41.9%; left: 1.3%; height: 1.8%; width: 1.1%;',
                    correct: 'true',
                }
            ]
        }, 10: {
            titulo: '2.	Datos Maestro de Proveedores',
            img: 'img/img_14.png',
            rubric: 'Comprueba los datos de compras para el proveedor con código 311491 en la Organización de Compras ECOP.',
            elements: [{
                    element: 'div',
                    styles: 'top: 12.3%; left: 23.5%; height: 2%; width: 14%;',
                    correct: 'true',
                    goto: 11
                }
            ]
        }, 11: {
            titulo: '3. El pedido de Compras',
            img: 'img/img_15.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 12,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'ME51N,me51n'
                }
            ]
        }, 12: {
            titulo: '3. El pedido de Compras',
            img: 'img/img_16.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 13,
            elements: [{
                    element: 'div',
                    styles: 'top: 42.2%;left: 53.8%;height: 1.5%;width: 2.5%;',
                    correct: 'true',
                    goto: 13
                }
            ]
        }, 13: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/img_17.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 14,
            elements: [{
                    element: 'div',
                    styles: 'top: 56.4%;left: 27.2%;height: 1.5%;width: 13%;',
                    correct: 'true',
                    goto: 14
                }
            ]
        }, 14: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/img_16b.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 15,
            elements: [{
                    element: 'div',
                    styles: 'top: 42.2%;left: 64.2%;height: 1.5%;width: 5%;',
                    correct: 'true',
                    goto: 15
                }
            ]
        }, 15: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/img_18.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 16,
            elements: [{
                    element: 'div',
                    styles: 'top: 60.4%;left: 49.6%;height: 1.5%;width: 16.85%;',
                    correct: 'true',
                    goto: 16
                }
            ]
        }, 16: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/img_19.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 17,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 42.2%;left: 10.4%;height: 1.1%;width: 3.5%;',
                    correct: '080'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 42.2%;left: 28%;height: 1.1%;width: 3.5%;',
                    correct: '100'
                }
            ]
        }, 17: {
            titulo: '3.- Área de trabajo de SAP',
            img: 'img/img_19.png',
            rubric: 'Crea una solicitud de pedido de compras del material 080 al proveedor llamado “GM Publicidad SL” y que tiene que entregarse en el centro D414. La Organización de compras a través de la que realizaremos esta compra recibe la descripción de “SOLU”. La cantidad deseada es de 100 Cajas.',
            goto: 18,
            elements: [{
                element: 'div',
                styles: 'top: 4%;left: 15%;height: 2.2%;width: 1.75%;',
                correct: 'true',
                goto: 18
                }
            ]
        }, 18: {
            titulo: 'Fin del tutorial',
            img: 'img/img_19.png',
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