var sim = {
    steps: {
        0: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_01.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en todos sus almacenes',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MM03,mm03'
                }
            ]
        }, 1: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_03.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en todos sus almacenes',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.5%;left: 9.3%;height: 1.4%;width: 8.75%;',
                    correct: '0003184,3184'
                }
            ]
        }, 2: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_04.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en todos sus almacenes',
            elements: [{
                    element: 'div',
                    styles: 'top: 52%;left: 21%;height: 2.1%;width: 18%;background: none;border: none;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_05.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en todos sus almacenes',
            goto: 4,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 21.6%;left: 20.3%;height: 1.4%;width: 2.2%;',
                    correct: '0100'
                }
            ]
        }, 4: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_06.png',
            rubric: 'Haz click dentro del recuadro correspondiente',
            elements: [{
                    element: 'div',
                    styles: 'top: 37.6%;left: 2%;height: 15.7%;width: 39.3%;background:none;border:none',
                    correct: 'true',
                    goto: 5
                }
            ]
        }, 5: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_01.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Materia Prima con código de almacén 001',
            goto: 6,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MM03,mm03'
                }
            ]
        }, 6: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_03.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Materia Prima con código de almacén 001',
            goto: 7,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.5%;left: 9.3%;height: 1.4%;width: 8.75%;',
                    correct: '0003184,3184'
                }
            ]
        }, 7: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_07.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Materia Prima con código de almacén 001',
            elements: [{
                element: 'div',
                styles: 'top: 52%;left: 21%;height: 2.1%;width: 18%;background:none;border:none',
                correct: 'true',
                goto: 8
            }
        ]
        }, 8: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_08.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Materia Prima con código de almacén 001',
            goto: 9,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 21.85%;left: 20.5%;height: 1.2%;width: 2%;',
                    correct: '0100'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 23.85%;left: 20.5%;height: 1.2%;width: 2%;',
                    correct: '001'
                }
            ]
        }, 9: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_10.png',
            rubric: 'Haz clic dentro del recuadro correspondiente',
            goto: 10,
            elements: [{
                    element: 'div',
                    styles: 'top: 37.6%;left: 2%;height: 15.7%;width: 39.3%;background:none;border:none',
                    correct: 'true',
                    goto: 10
                }
            ]
        }, 10: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_11.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Producto Acabado con código de almacén 009',
            goto: 11,
            elements: [{
                    element: 'div',
                    styles: 'top: 11%;left: 12%;height: 2%;width: 10%;background:none;border:none',
                    correct: 'true',
                    goto: 11
                }
            ]
        }, 11: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_12.png',
            rubric: 'Comprueba la cantidad de stock libre de utilización que hay del material con referencia “0003184” en el periodo actual en:<br>Centro 0100 en el almacén de Producto Acabado con código de almacén 009',
            goto: 12,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 24.7%;left: 24%;height: 1.4%;width: 2.1%;;',
                    correct: '009',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '1.	Maestro de Materiales: datos de almacenamiento y stock',
            img: 'img/img_13.png',
            rubric: 'Haz clic dentro del recuadro correspondiente',
            goto: 13,
            elements: [{
                    element: 'div',
                    styles: 'top: 37.6%;left: 2%;height: 15.7%;width: 39.3%;background:none;border:none',
                    correct: 'true',
                    goto: 13
                }
            ]
        }, 
        
        
        
        
        13: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_14.png',
            rubric: 'Realiza un traspaso de stock entre almacenes desde el almacén de 001 del centro 3001 al almacén 009 del mismo centro de 84 unidades ZCJ del material del material es 503491 lote VA180603. El motivo del traspaso es “Traspaso almacén”.',
            goto: 14,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MB1B,mb1b'
                }
            ]
        }, 14: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_15.png',
            rubric: 'Realiza un traspaso de stock entre almacenes desde el almacén de 001 del centro 3001 al almacén 009 del mismo centro de 84 unidades ZCJ del material del material es 503491 lote VA180603. El motivo del traspaso es “Traspaso almacén”.',
            goto: 15,
            elements: [{
                    element: 'div',
                    styles: 'top: 27.4%;left: 9.6%;height: 1.7%;width: 2%;',
                    correct: 'true',
                    goto: 15
                }
            ]
        }, 15: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_15b.png',
            rubric: 'Realiza un traspaso de stock entre almacenes desde el almacén de 001 del centro 3001 al almacén 009 del mismo centro de 84 unidades ZCJ del material del material es 503491 lote VA180603. El motivo del traspaso es “Traspaso almacén”.',
            goto: 16,
            elements: [{
                    element: 'div',
                    styles: 'top: 36.2%;left: 26.75%;height: 1.8%;width: 29.8%;background:none;border:none',
                    correct: 'true',
                    goto: 16
                }
            ]
        }, 16: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_16.png',
            rubric: 'Realiza un traspaso de stock entre almacenes desde el almacén de 001 del centro 3001 al almacén 009 del mismo centro de 84 unidades ZCJ del material del material es 503491 lote VA180603. El motivo del traspaso es “Traspaso almacén”.',
            goto: 17,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 23%;left: 9.7%;height: 1.3%;width: 12%;',
                    correct: 'Traspaso almacén'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 29.3%;left: 9.7%;height: 1.3%;width: 2.5%;',
                    correct: '3001'
                },
                /* {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 31.5%;left: 9.7%;height: 1.3%;width: 2%;',
                    correct: '009'
                }, */
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 31.5%;left: 9.7%;height: 1.3%;width: 2%;',
                    correct: '009'
                }
            ]
        }, 17: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_17.png',
            rubric: 'Realiza un traspaso de stock entre almacenes desde el almacén de 001 del centro 3001 al almacén 009 del mismo centro de 84 unidades ZCJ del material del material es 503491 lote VA180603. El motivo del traspaso es “Traspaso almacén”. Una vez contabilizado el movimiento obtienes el número de documento material del movimiento que será 5004612733 en este caso',
            goto: 18,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 5%;height: 1.3%;width: 8.6%;',
                    correct: '503491'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 14%;height: 1.3%;width: 8.2%;',
                    correct: '84'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 22.7%;height: 1.3%;width: 1.4%;',
                    correct: 'ZCJ'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 26.9%;height: 1.3%;width: 4.8%;',
                    correct: 'VA180603'
                }
            ]
        }, 18: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_18.png',
            rubric: 'Una vez realizado el traspaso comprueba mediante la transacción MB51 que se haya contabilizado el movimiento y que sea el mismo número de documento material.',
            goto: 19,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'MB51,mb51'
                }
            ]
        }, 19: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_20.png',
            rubric: 'En la transacción MB51 deberemos filtrar con los parámetros de búsqueda que coincidan con el movimiento realizado mediante la MB1B',
            goto: 20,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.7%;left: 17.5%;height: 1.3%;width: 8.5%;',
                    correct: '503491'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.7%;left: 17.5%;height: 1.3%;width: 2.5%;',
                    correct: '3001'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20.8%;left: 17.5%;height: 1.3%;width: 2.5%;',
                    correct: '001'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 29.3%;left: 17.5%;height: 1.3%;width: 2.5%;',
                    correct: '305'
                }
            ]
        }, 20: {
            titulo: '2.	Movimientos y traspasos de stock',
            img: 'img/img_21.png',
            rubric: 'Vemos que número de documento material de este movimiento es el mismo obtenido que en la contabilización del movimiento',
            goto: 21,
            elements: [{
                    element: 'div',
                    styles: 'top: 15.3%;left: 1.6%;height: 8.6%;width: 57.15%;',
                    correct: 'true'
                }
            ]
        }, 21: {
            titulo: '3.	Recepción de pedidos de compra',
            img: 'img/img_22.png',
            rubric: 'Realiza la recepción de un material que nos ha llegado con núm. de pedido de compra 5500208360 y núm. de entrega entrante 8996264685.<br> Una vez contabilizada la recepción de mercancías comprueba mediante la MB51 con qué movimiento se ha realizado la entrada.',
            goto: 22,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'migo'
                }
            ]
        }, 22: {
            titulo: '3.	Recepción de pedidos de compra',
            img: 'img/img_23.png',
            rubric: 'Realiza la recepción de un material que nos ha llegado con núm. de pedido de compra 5500208360 y núm. de entrega entrante 8996264685.<br> Una vez contabilizada la recepción de mercancías comprueba mediante la MB51 con qué movimiento se ha realizado la entrada.',
            goto: 23,
            elements: [{
                    element: 'div',
                    styles: 'top: 19.4%;left: 17.1%;height: 1.5%;width: 11.8%;',
                    correct: 'true'
                }
            ]
        }, 23: {
            titulo: '3.	Recepción de pedidos de compra',
            img: 'img/img_24.png',
            rubric: 'Filtraremos en la MB51 por número de referencia utilizando el número de entrega entrante',
            goto: 24,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 22.7%;left: 36.4%;height: 1.5%;width: 7.7%;',
                    correct: '8996264685'
                }
            ]
        }, 24: {
            titulo: '3.	Recepción de pedidos de compra',
            img: 'img/img_25.png',
            rubric: 'La entrada de mercancías del pedido de compra anterior ha sido contabilizada mediante el movimiento 101',
            goto: 25,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 29.3%;left: 17.4%;height: 1.4%;width: 2%;',
                    correct: '101'
                }
            ]
        }, 25: {
            titulo: 'Fin del tutorial',
            img: 'img/img_26.png',
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