var sim = {
    steps: {
        0: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_02.png',
            rubric: 'Accede a los datos maestros de cliente con código 734408 y comprueba en qué estructura organizativa está abierto para ventas y sus datos de marketing.',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'VD03,vd03'
                }
            ]
        }, 1: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_03.png',
            rubric: 'Accede a los datos maestros de cliente con código 734408 y comprueba en qué estructura organizativa está abierto para ventas y sus datos de marketing.',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 17.4%;left: 12.75%;height: 1.4%;width: 7.75%;',
                    correct: '734408',
                    goto: 2
                }
            ]
        }, 2: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_04.png',
            rubric: 'En Áreas de ventas de clientes podrás comprobar en qué estructuras organizativas está dado de alta cada cliente. ',
            goto: 3,
            elements: [{
                    element: 'div',
                    styles: 'top: 32.1%;left: 15.2%;height: 2.1%;width: 16%;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_05.png',
            rubric: 'Selecciona la línea que aparece y comprueba los datos de marketing del cliente en esta estructura organizativa',
            elements: [{
                    element: 'div',
                    styles: 'top: 24.25%;left: 22%;height: 2%;width: 40.5%;',
                    correct: 'true',
                    goto: 4
                }
            ]
        }, 4: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_06.png',
            rubric: 'Haz click en el botón de OK para ver los datos.',
            elements: [{
                    element: 'div',
                    styles: 'top: 37.8%;left: 26%;height: 2%;width: 1.5%;',
                    correct: 'true',
                    goto: 5
                }
            ]
        }, 5: {
            titulo: '1. Estructura Organizativa en SAP SD y Datos Maestros de cliente',
            img: 'img/img_07.png',
            rubric: 'Haz click en los datos para continuar con la siguiente actividad.',
            elements: [{
                    element: 'div',
                    styles: 'top: 23.25%;left: 1.7%;height: 17.5%;width: 39.5%;',
                    correct: 'true',
                    goto: 6
                }
            ]
        }, 6: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_08.png',
            rubric: 'Crea un pedido de rechazo de cliente que genere un abono y comprueba las condiciones de venta aplicadas para este cliente, concretamente el % de descuento aplicado al precio de venta con la condición ZFCC.<br><br>La organización de ventas será REFR y la fecha en la que entramos el pedido en sistema es 19.07.2018. El código del cliente es 734408 y ha rechazado 36 ZCJ (unidad de medida) del material 0002332 ',
            goto: 7,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'VA01,va01'
                }
            ]
        }, 7: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_09.png',
            rubric: 'Crea un pedido de rechazo de cliente que genere un abono y comprueba las condiciones de venta aplicadas para este cliente, concretamente el % de descuento aplicado al precio de venta con la condición ZFCC.<br><br>La organización de ventas será REFR y la fecha en la que entramos el pedido en sistema es 19.07.2018. El código del cliente es 734408 y ha rechazado 36 ZCJ (unidad de medida) del material 0002332 ',
            goto: 8,
            elements: [{
                element: 'div',
                styles: 'top: 14.3%;left: 15%;height: 1.8%;width: 12.3%;',
                correct: 'true',
                }
            ]
        }, 8: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_10.png',
            rubric: 'Crea un pedido de rechazo de cliente que genere un abono y comprueba las condiciones de venta aplicadas para este cliente, concretamente el % de descuento aplicado al precio de venta con la condición ZFCC.<br><br>La organización de ventas será REFR y la fecha en la que entramos el pedido en sistema es 19.07.2018. El código del cliente es 734408 y ha rechazado 36 ZCJ (unidad de medida) del material 0002332 ',
            goto: 9,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 24.9%;left: 11.6%;height: 1.2%;width: 2.5%;',
                    correct: 'REFR,refr'
                }
            ]
        }, 9: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_11.png',
            rubric: 'Crea un pedido de rechazo de cliente que genere un abono y comprueba las condiciones de venta aplicadas para este cliente, concretamente el % de descuento aplicado al precio de venta con la condición ZFCC.<br><br>La organización de ventas será REFR y la fecha en la que entramos el pedido en sistema es 19.07.2018. El código del cliente es 734408 y ha rechazado 36 ZCJ (unidad de medida) del material 0002332 ',
            goto: 10,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.5%;left: 9.3%;height: 1.4%;width: 4.8%;',
                    correct: '734408',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.6%;left: 9.3%;height: 1.4%;width: 4.8%;',
                    correct: '734408',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20.8%;left: 27.8%;height: 1.4%;width: 5.6%;',
                    correct: '19.07.2018',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 31.3%; left: 11.5%; height: 1.4%; width: 5.6%;',
                    correct: '19.07.2018',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 37.6%; left: 27.8%; height: 1.4%; width: 5.6%;',
                    correct: '19.07.2018',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 52.4%; left: 6.1%; height: 1.4%; width: 8.6%;',
                    correct: '0002332,2332',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 52.4%; left: 15%; height: 1.4%; width: 9.1%;',
                    correct: '36',
                }, {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 52.4%; left: 24.3%; height: 1.4%; width: 1.5%;',
                    correct: 'ZCJ,zcj',
                }
            ]
        }, 10: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_14.png',
            rubric: 'Haz click en visualizar detalles de cabecera para ver las condiciones del pedido y marca el % de descuento aplicado con la condición ZFCC',
            elements: [{
                    element: 'div',
                    styles: 'top: 23.3%;left: 39.5%;height: 2%;width: 14%;',
                    correct: 'true',
                    goto: 11
                }
            ]
        }, 11: {
            titulo: '2.	Creación de un pedido de ventas, condiciones y precios de venta',
            img: 'img/img_15.png',
            rubric: 'Haz click en visualizar detalles de cabecera para ver las condiciones del pedido y marca el % de descuento aplicado con la condición ZFCC',
            elements: [{
                    element: 'div',
                    styles: 'top: 49.5%;left: 3%;height: 2%;width: 57%;',
                    correct: 'true',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '3. Creación de un pedido con referencia',
            img: 'img/img_08.png',
            rubric: 'Crea un pedido de rechazo con referencia de pedido inicial I519215371.',
            goto: 13,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'VA01,va01'
                }
            ]
        }, 13: {
            titulo: '3. Creación de un pedido con referencia',
            img: 'img/img_17.png',
            rubric: 'Crea un pedido de rechazo con referencia de pedido inicial I519215371.',
            elements: [{
                    element: 'div',
                    styles: 'left: 1.5%;top: 10.9%;height: 2.2%;width: 10%;',
                    correct: 'true',
                    goto: 14
                }
            ]
        }, 14: {
            titulo: '3. Creación de un pedido con referencia',
            img: 'img/img_16.png',
            rubric: 'Crea un pedido de rechazo con referencia de pedido inicial I519215371.',
            goto: 15,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 30.3%;left: 26%;height: 1.3%;width: 14.5%;',
                    correct: 'I519215371,i519215371'
                },
                {
                    element: 'div',
                    styles: 'left: 34.2%;top: 63.4%;height: 2.2%;width: 5%;',
                    correct: 'true',
                    goto: 15
                }
            ]
        }, 15: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_18.png',
            rubric: 'Busca el número de pedido de ventas SAP que corresponde al cliente 734408 y con número de pedido cliente 34/2016. Una vez localizado el número de pedido SAP,  genera la entrega de salida con la referencia de pedido SAP en el puesto de expedición 7000, confirma su expedición y comprueba que se ha generado la factura a cliente.',
            goto: 16,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'VA03,va03'
                }
            ]
        }, 16: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_19.png',
            rubric: 'Busca el número de pedido de ventas SAP que corresponde al cliente 734408 y con número de pedido cliente 34/2016. Una vez localizado el número de pedido SAP,  genera la entrega de salida con la referencia de pedido SAP en el puesto de expedición 7000, confirma su expedición y comprueba que se ha generado la factura a cliente.',
            goto: 17,
            elements: [{
                    element: 'div',
                    styles: 'top: 18.6%;left: 26.3%;height: 2%;width: 1.3%;',
                    correct: 'true'
                }
            ]
        }, 17: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_21.png',
            rubric: 'Busca el número de pedido de ventas SAP que corresponde al cliente 734408 y con número de pedido cliente 34/2016. Una vez localizado el número de pedido SAP, genera la entrega de salida con la referencia de pedido SAP en el puesto de expedición 7000, confirma su expedición y comprueba que se ha generado la factura a cliente.',
            goto: 18,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 30.5%;left: 23.35%;height: 1.5%;width: 7%;',
                    correct: '734408'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 47.3%;left: 23.35%;height: 1.5%;width: 4%;',
                    correct: 'ZARC'
                }
            ]
        }, 18: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_23.png',
            rubric: 'Busca el número de pedido de ventas SAP que corresponde al cliente 734408 y con número de pedido cliente 34/2016. Una vez localizado el número de pedido SAP, genera la entrega de salida con la referencia de pedido SAP en el puesto de expedición 7000, confirma su expedición y comprueba que se ha generado la factura a cliente.',
            goto: 19,
            elements: [{
                    element: 'div',
                    styles: 'top: 22.2%;left: 12%;height: 2%;width: 46.8%;',
                    correct: 'true'
                }
            ]
        }, 19: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_24.png',
            rubric: 'Haz click para continuar.',
            elements: [{
                    element: 'div',
                    styles: 'top: 18.5%;left: 11.5%;height: 2%;width: 16.2%;',
                    correct: 'true',
                    goto: 20
                }
            ]
        }, 20: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_25.png',
            rubric: 'Ahora que ya has localizado el número de pedido SAP deberás crear la entrega de salida a partir de este número de pedido en el puesto de expedición 7000',
            goto: 21,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'VL01N,vl01n'
                }
            ]
        }, 21: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_26.png',
            rubric: 'Ahora que ya has localizado el número de pedido SAP deberás crear la entrega de salida a partir de este número de pedido en el puesto de expedición 7000',
            goto: 22,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.6%;left: 12.6%;height: 1.4%;width: 2%;',
                    correct: '7000'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.1%;left: 12.6%;height: 1.4%;width: 4.8%;',
                    correct: '4000160384'
                }
            ]
        }, 22: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_26.png',
            rubric: 'El número de entrega de salida generado es 8525620689. <br>Haz click en los datos para continuar.',
            goto: 23,
            elements: [{
                    element: 'div',
                    styles: 'top: 23%;left: 1.1%;height: 11.5%;width: 39.9%;',
                    correct: 'true'
                }
            ]
        }, 23: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_27.png',
            rubric: 'Contabiliza la salida de mercancías de la entrega de salida y comprueba en el flujo de documentos que se ha generado la factura a cliente un día posterior a confirmar la salida de mercancías.',
            goto: 24,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'V03N,v03n'
                }
            ]
        }, 24: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_28.png',
            rubric: 'Contabiliza la salida de mercancías de la entrega de salida y comprueba en el flujo de documentos que se ha generado la factura a cliente un día posterior a confirmar la salida de mercancías.',
            goto: 25,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.7%;left: 12%;height: 1.5%;width: 12.15%;',
                    correct: '8525620689'
                }
            ]
        }, 25: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_29.png',
            rubric: 'Contabiliza la salida de mercancías de la entrega de salida y comprueba en el flujo de documentos que se ha generado la factura a cliente un día posterior a confirmar la salida de mercancías.',
            goto: 26,
            elements: [{
                    element: 'div',
                    styles: 'top: 10.5%;left: 21%;height: 3%;width: 6.5%;',
                    correct: 'true'
                }
            ]
        }, 26: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_30.png',
            rubric: 'Contabiliza la salida de mercancías de la entrega de salida y comprueba en el flujo de documentos que se ha generado la factura a cliente un día posterior a confirmar la salida de mercancías.',
            goto: 27,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 18.7%;left: 12%;height: 1.5%;width: 12.15%;',
                    correct: '8525620689'
                }
            ]
        }, 27: {
            titulo: '4. Búsqueda de número de pedido cliente, expedición y facturación a cliente',
            img: 'img/img_31.png',
            rubric: 'Contabiliza la salida de mercancías de la entrega de salida y comprueba en el flujo de documentos que se ha generado la factura a cliente un día posterior a confirmar la salida de mercancías.',
            goto: 28,
            elements: [{
                    element: 'div',
                    styles: 'top: 20.5%;left: 1%;height: 24.5%;width: 36.6%;',
                    correct: 'true'
                }
            ]
        }, 28: {
            titulo: 'Fin del tutorial',
            img: 'img/img_31.png',
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