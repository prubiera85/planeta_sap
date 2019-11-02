var sim = {
    steps: {
        0: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_02.png',
            rubric: 'Modifica la cabecera de un infotipo estándar, en este caso será el infotipo de personal Datos personales,de modo que en lugar de “Centro de Coste” aparezca “Subdivisión de personal” en su mismo lugar, en la línea 3. <br>Los datos de acceso a este infotipo son los siguientes:<br>Nº de personal: 4; Infotipo: 0002 Datos personales',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 5.9%;left: 18.5%;height: 1.9%;width: 8.3%;',
                    correct: 'PA30,pa30'
                }
            ]
        }, 1: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_03.png',
            rubric: 'Modifica la cabecera de un infotipo estándar, en este caso será el infotipo de personal Datos personales,de modo que en lugar de “Centro de Coste” aparezca “Subdivisión de personal” en su mismo lugar, en la línea 3. <br>Los datos de acceso a este infotipo son los siguientes:<br>Nº de personal: 4; Infotipo: 0002 Datos personales',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20%;left: 43%;height: 2%;width: 19.5%;',
                    correct: '4,0004,004,04'
                }
            ]
        }, 2: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_05.png',
            rubric: 'Modifica la cabecera de un infotipo estándar, en este caso será el infotipo de personal Datos personales,de modo que en lugar de “Centro de Coste” aparezca “Subdivisión de personal” en su mismo lugar, en la línea 3. <br>Los datos de acceso a este infotipo son los siguientes:<br>Nº de personal: 4; Infotipo: 0002 Datos personales',
            goto: 3,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 73%;left: 44.5%;height: 2%;width: 12.9%;',
                    correct: '2,0002,002,02'
                }
            ]
        }, 3: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_06.png',
            rubric: 'Modifica la cabecera de un infotipo estándar, en este caso será el infotipo de personal Datos personales,de modo que en lugar de “Centro de Coste” aparezca “Subdivisión de personal” en su mismo lugar, en la línea 3. <br>Los datos de acceso a este infotipo son los siguientes:<br>Nº de personal: 4; Infotipo: 0002 Datos personales',
            elements: [{
                    element: 'div',
                    styles: 'top: 49.25%;left: 36.5%;height: 3%;width: 17.5%;',
                    correct: 'true',
                    goto: 4
                }
            ]
        }, 4: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_07.png',
            rubric: 'Una vez comprobados los datos de la cabecera del infotipo 0002 Datos personales y localizado el campo “Centro de Coste”, accederemos a la transacción SPRO y herramienta IMG para modificar el infotipo “0002 Datos personales”.<br>Accede directamente desde la pantalla en la que te encuentras.',
            goto: 5,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 5.9%;left: 18.5%;height: 1.9%;width: 8.3%;',
                    correct: '/oSPRO,/ospro,/nSPRO,/nspro,SPRO,spro'
                }
            ]
        }, 5: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_09.png',
            rubric: 'Una vez comprobados los datos de la cabecera del infotipo 0002 Datos personales y localizado el campo “Centro de Coste”, accederemos a la transacción SPRO y herramienta IMG para modificar el infotipo “0002 Datos personales”.<br>Accede directamente desde la pantalla en la que te encuentras.',
            elements: [{
                    element: 'div',
                    styles: 'top: 15.25%;left: 16%;height: 2.5%;width: 10.5%;',
                    correct: 'true',
                    goto: 6
                }
            ]
        }, 6: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_10.png',
            rubric: 'Una vez comprobados los datos de la cabecera del infotipo 0002 Datos personales y localizado el campo “Centro de Coste”, accederemos a la transacción SPRO y herramienta IMG para modificar el infotipo “0002 Datos personales”.<br>Accede directamente desde la pantalla en la que te encuentras.',
            elements: [{
                    element: 'div',
                    styles: 'top: 83%;left: 17%;height: 2%;width: 16.5%;',
                    correct: 'true',
                    goto: 7
                }
            ]
        }, 7: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_11.png',
            rubric: 'Una vez comprobados los datos de la cabecera del infotipo 0002 Datos personales y localizado el campo “Centro de Coste”, accederemos a la transacción SPRO y herramienta IMG para modificar el infotipo “0002 Datos personales”.<br>Accede directamente desde la pantalla en la que te encuentras.',
            elements: [{
                    element: 'div',
                    styles: 'top: 83%;left: 22%;height: 2%;width: 17.5%;',
                    correct: 'true',
                    goto: 8
                }
            ]
        }, 8: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_12.png',
            rubric: 'Seleccionaremos Estructura de cabecera por infotipo clicando sobre ella.',
            elements: [{
                    element: 'div',
                    styles: 'top: 30.8%;left: 47.5%;height: 2.7%;width: 18.5%;',
                    correct: 'true',
                    goto: 9
                }
            ]
        }, 9: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_13.png',
            rubric: 'Nos fijaremos en el tipo de cabecera del infotipo 0002 Datos personales y retendremos este número, volveremos atrás.',
            elements: [{
                    element: 'div',
                    styles: 'top: 5.8%;left: 33%;height: 2.7%;width: 1.7%;',
                    correct: 'true',
                    goto: 10
                }
            ]
        }, 10: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_15.png',
            rubric: 'Consultaremos el tipo de modificación de cabecera para una cabecera tipo A.',
            elements: [{
                    element: 'div',
                    styles: 'top: 33.3%;left: 18%;height: 2%;width: 14%;',
                    correct: 'true',
                    goto: 11
                }
            ]
        }, 11: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_16.png',
            rubric: 'Consultaremos el tipo de modificación de cabecera para una cabecera tipo A.',
            elements: [{
                    element: 'div',
                    styles: 'top: 5.8%;left: 33%;height: 2.7%;width: 1.7%;',
                    correct: 'true',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_18.png',
            rubric: 'En este apartado debes definir la nueva cabecera para el infotipo 0002 Datos Personales, solamente deberás modificar aquellos datos que afecten a la línea 3.',
            goto: 13,
            elements: [{
                    element: 'div',
                    styles: 'top: 36%;left: 18%;height: 2%;width: 17%;',
                    correct: 'true'
                }
            ]
        }, 13: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_19.png',
            rubric: 'En este apartado debes definir la nueva cabecera para el infotipo 0002 Datos Personales, solamente deberás modificar aquellos datos que afecten a la línea 3.',
            goto: 14,
            elements: [{
                    element: 'div',
                    styles: 'top: 64.8%;left: 17%;height: 2.7%;width: 35.8%;',
                    correct: 'true'
                }
            ]
        }, 14: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_20.png',
            rubric: 'Verifica el significado de las siglas de la columna TpC (tipo de campo) para la línea 1 y comprueba los diferentes nombres de campo que aparecen.',
            goto: 15,
            elements: [{
                    element: 'div',
                    styles: 'top: 45.8%;left: 48%;height: 2.7%;width: 25.4%;background:none;border:none',
                    correct: 'true'
                }
            ]
        }, 15: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_22.png',
            rubric: 'Ahora realiza los cambios necesarios en la línea 3 para que el nombre de campo Centro de Coste sea reemplazado por Subdivisión personal',
            goto: 16,
            elements: [{
                    element: 'div',
                    styles: 'top: 70.8%;left: 33.6%;height: 2.6%;width: 5.3%;background:none;border:none',
                    correct: 'true'
                }
            ]
        }, 16: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_23.png',
            rubric: 'Ahora realiza los cambios necesarios en la línea 3 para que el nombre de campo Centro de Coste sea reemplazado por Subdivisión personal',
            goto: 17,
            elements: [{
                    element: 'div',
                    styles: 'top: 62%;left: 18.6%;height: 2.6%;width: 20.7%;',
                    correct: 'true'
                }
            ]
        }, 17: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_25.png',
            rubric: 'Ahora realiza los cambios necesarios en la línea 3 para que el nombre de campo Centro de Coste sea reemplazado por Subdivisión personal',
            goto: 18,
            elements: [{
                    element: 'div',
                    styles: 'top: 5%;left: 30.75%;height: 3.5%;width: 1.8%;',
                    correct: 'true'
                }
            ]
        }, 18: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_28.png',
            rubric: 'Ahora realiza los cambios necesarios en la línea 3 para que el nombre de campo Centro de Coste sea reemplazado por Subdivisión personal',
            goto: 19,
            elements: [{
                    element: 'div',
                    styles: 'top: 43.8%;left: 34.5%;height: 3%;width: 1.7%;',
                    correct: 'true'
                }
            ]
        }, 19: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_02.png',
            rubric: 'Una vez guardadas las modificaciones, comprueba que se haya realizado la modificación en el infotipo “0002 Datos personales”.',
            goto: 20,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 5.9%;left: 18.5%;height: 1.9%;width: 8.3%;',
                    correct: 'PA30,pa30'
                }
            ]
        }, 20: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_03.png',
            rubric: 'Una vez guardadas las modificaciones, comprueba que se haya realizado la modificación en el infotipo “0002 Datos personales”.',
            goto: 21,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 20%;left: 43%;height: 2%;width: 19.5%;',
                    correct: '4'
                }
            ]
        }, 21: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_05.png',
            rubric: 'Una vez guardadas las modificaciones, comprueba que se haya realizado la modificación en el infotipo “0002 Datos personales”.',
            goto: 22,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 73%;left: 44.5%;height: 2%;width: 12.9%;',
                    correct: '2,0002'
                }
            ]
        }, 22: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_06.png',
            rubric: 'Una vez guardadas las modificaciones, comprueba que se haya realizado la modificación en el infotipo “0002 Datos personales”.',
            elements: [{
                    element: 'div',
                    styles: 'top: 49.25%;left: 36.5%;height: 3%;width: 17.5%;',
                    correct: 'true',
                    goto: 23
                }
            ]
        }, 23: {
            titulo: '1.	Gestión de personal en SAP HR – Modificación de un infotipo',
            img: 'img/img_29.png',
            rubric: 'Una vez guardadas las modificaciones, comprueba que se haya realizado la modificación en el infotipo “0002 Datos personales”.',
            elements: [{
                    element: 'div',
                    styles: 'top: 26%;left: 51%;height: 3%;width: 21.5%;',
                    correct: 'true',
                    goto: 24
                }
            ]
        }, 24: {
            titulo: 'Fin del tutorial',
            img: 'img/img_29.png',
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