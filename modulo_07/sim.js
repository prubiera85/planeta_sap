var sim = {
    steps: {
        0: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_01.png',
            rubric: 'Accede al informe de Registros Info donde hay los registros de compras por proveedor y genera una variante “TEST” con descripción “Variante test” protegida, para que solamente pueda modificarla el usuario de creación. Los valores del campo de búsqueda Proveedor y Organización de compras deben ser obligatorios. La variante tendrá los siguientes valores de campo: <br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>Una vez creada la variante debes ejecutar el informe.',
            goto: 1,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'ME1L,me1l'
                }
            ]
        }, 1: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_03.png',
            rubric: 'Accede al informe de Registros Info donde hay los registros de compras por proveedor y genera una variante “TEST” con descripción “Variante test” protegida, para que solamente pueda modificarla el usuario de creación. Los valores del campo de búsqueda Proveedor y Organización de compras deben ser obligatorios. La variante tendrá los siguientes valores de campo: <br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>Una vez creada la variante debes ejecutar el informe.',
            goto: 2,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 14.4%;left: 17.4%;height: 1.4%;width: 4.7%;',
                    correct: '800084'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 17.4%;height: 1.4%;width: 3%;',
                    correct: '01'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 31.3%;left: 17.4%;height: 1.4%;width: 3%;',
                    correct: '6001'
                }
            ]
        }, 2: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_04.png',
            rubric: 'Accede al informe de Registros Info donde hay los registros de compras por proveedor y genera una variante “TEST” con descripción “Variante test” protegida, para que solamente pueda modificarla el usuario de creación. Los valores del campo de búsqueda Proveedor y Organización de compras deben ser obligatorios. La variante tendrá los siguientes valores de campo: <br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>Una vez creada la variante debes ejecutar el informe.',
            elements: [{
                    element: 'div',
                    styles: 'top: 3.5%;left: 15.3%;height: 2.7%;width: 2%;',
                    correct: 'true',
                    goto: 3
                }
            ]
        }, 3: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_06.png',
            rubric: 'Accede al informe de Registros Info donde hay los registros de compras por proveedor y genera una variante “TEST” con descripción “Variante test” protegida, para que solamente pueda modificarla el usuario de creación. Los valores del campo de búsqueda Proveedor y Organización de compras deben ser obligatorios. La variante tendrá los siguientes valores de campo: <br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>Una vez creada la variante debes ejecutar el informe.',
            goto: 4,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 14.2%;left: 9.8%;height: 1.4%;width: 6.7%;',
                    correct: 'TEST'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.4%;left: 9.8%;height: 1.4%;width: 14.35%;',
                    correct: 'Variante test'
                },
                {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 20.6%;left: 3.2%;height: 1.8%;width: 1.1%;',
                    correct: 'true'
                },
                {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 33.4%;left: 63.1%;height: 1.8%;width: 1.1%;',
                    correct: 'true'
                },
                {
                    element: 'input',
                    type: 'checkbox',
                    styles: 'top: 44.4%;left: 63.1%;height: 1.8%;width: 1.1%;',
                    correct: 'true'
                }
            ]
        }, 4: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_09.png',
            rubric: 'Accede al informe de Registros Info donde hay los registros de compras por proveedor y genera una variante “TEST” con descripción “Variante test” protegida, para que solamente pueda modificarla el usuario de creación. Los valores del campo de búsqueda Proveedor y Organización de compras deben ser obligatorios. La variante tendrá los siguientes valores de campo: <br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>Una vez creada la variante debes ejecutar el informe.',
            elements: [{
                    element: 'div',
                    styles: 'top: 3.5%;left: 15.3%;height: 2.7%;width: 2%;',
                    correct: 'true',
                    goto: 5
                }
            ]
        }, 5: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_03.png',
            rubric: 'Ejecuta el informe sin indicar el valor de Organización de Compras.<br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>',
            goto: 6,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 14.4%;left: 17.4%;height: 1.4%;width: 4.7%;',
                    correct: '800084'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 27.2%;left: 17.4%;height: 1.4%;width: 3%;',
                    correct: ''
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 31.3%;left: 17.4%;height: 1.4%;width: 3%;',
                    correct: '6001'
                }
            ]
        }, 6: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_11.png',
            rubric: 'Observa el mensaje de error en la parte inferior de la ventana.',
            elements: [{
                    element: 'div',
                    styles: 'top: 97%;left: 1.3%;height: 2.7%;width: 17%;',
                    correct: 'true',
                    goto: 7
                }
            ]
        }, 7: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_03.png',
            rubric: 'Ejecuta el informe indicando como Organización de Compras 01.<br>Proveedor: 800084; Centro: 6001. <br>',
            goto: 8,
            elements: [{
                        element: 'input',
                        type: 'text',
                        styles: 'top: 14.4%;left: 17.4%;height: 1.4%;width: 4.7%;',
                        correct: '800084'
                    },
                    {
                        element: 'input',
                        type: 'text',
                        styles: 'top: 27.2%;left: 17.4%;height: 1.4%;width: 3%;',
                        correct: '01'
                    },
                    {
                        element: 'input',
                        type: 'text',
                        styles: 'top: 31.3%;left: 17.4%;height: 1.4%;width: 3%;',
                        correct: '6001'
                    }
                ]
        }, 8: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_12.png',
            rubric: 'Ahora vuelve acceder al informe y borra la variante “TEST” creada.',
            // rubric: 'Ejecuta el informe indicando como Organización de Compras 01.<br>Proveedor: 800084; Centro: 6001; Organización de Compras: 01. <br>',
            elements: [{
                    element: 'div',
                    styles: 'top: 15%;left: 2%;height: 79%;width: 38.3%; border: none; background: none',
                    correct: 'true',
                    pressEnter: 'true',
                    goto: 9
                },
                
            ]
        }, 9: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_13.png',
            rubric: 'Ahora vuelve acceder al informe y borra la variante “TEST” creada.',
            elements: [{
                    element: 'div',
                    styles: 'top: 7.7%;left: 29%;height: 1.8%;width: 16.3%;',
                    correct: 'true',
                    goto: 10
                }
            ]
        }, 10: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_14.png',
            rubric: 'Ahora vuelve acceder al informe y borra la variante “TEST” creada.',
            elements: [{
                    element: 'div',
                    styles: 'top: 38%;left: 6%;height: 1.5%;width: 19.4%;',
                    correct: 'true',
                    goto: 11
                }
            ]
        }, 11: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_15.png',
            rubric: 'Ahora vuelve acceder al informe y borra la variante “TEST” creada.',
            elements: [{
                    element: 'div',
                    styles: 'top: 42%;left: 20.2%;height: 2%;width: 6%;',
                    correct: 'true',
                    goto: 12
                }
            ]
        }, 12: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_16.png',
            rubric: 'Ahora vuelve acceder al informe y borra la variante “TEST” creada.',
            elements: [{
                    element: 'div',
                    styles: 'top: 36.1%;left: 16.2%;height: 2%;width: 5.5%;',
                    correct: 'true',
                    goto: 13
                }
            ]
        }, 13: {
            titulo: '1.	Informes en SAP: Sistemas Info',
            img: 'img/img_17.png',
            rubric: 'Observa el mensaje en la parte inferior de la ventana.',
            elements: [{
                    element: 'div',
                    styles: 'top: 97%;left: 1.3%;height: 2.7%;width: 17%;',
                    correct: 'true',
                    goto: 14
                }
            ]
        }, 14: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_01.png',
            rubric: 'Parametriza la disposición o layout del informe Evaluaciones generales de proveedor de una variante existente.<br>- Accede a la transacción y selecciona la variante ya creada “TEST 2”',
            goto: 15,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 4.2%;left: 3.7%;height: 1.3%;width: 8%;',
                    correct: 'ME80FN,me80fn'
                }
            ]
        }, 15: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_20.png',
            rubric: 'Parametriza la disposición o layout del informe Evaluaciones generales de proveedor de una variante existente.<br>- Accede a la transacción y selecciona la variante ya creada “TEST 2”',
            elements: [{
                    element: 'div',
                    styles: 'top: 10.6%;left: 3.5%;height: 2.5%;width: 1.8%;',
                    correct: 'true',
                    goto: 16,
                }
            ]
        }, 16: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_21.png',
            rubric: 'Ejecuta la variante “TEST 2” limitando la cantidad máxima de aciertos a 100.',
            goto: 17,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 36.2%;left: 22.3%;height: 1.4%;width: 6.8%;',
                    correct: 'TEST 2,test 2'
                }
            ]
        }, 17: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_22.png',
            rubric: 'Ejecuta la variante “TEST 2” limitando la cantidad máxima de aciertos a 100.',
            goto: 18,
            elements: [{
                    element: 'div',
                    styles: 'top: 31.8%;left: 3.75%;height: 1.8%;width: 25.3%;',
                    correct: 'true'
                }
            ]
        }, 18: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_23.png',
            rubric: 'Ejecuta la variante “TEST 2” limitando la cantidad máxima de aciertos a 100.',
            goto: 19,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 16.4%;left: 17.7%;height: 1.4%;width: 3.1%;',
                    correct: '100'
                }
            ]
        }, 19: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_24.png',
            rubric: 'Modifica el layout suprimiendo el campo “Posición” y “Organización de Compras” y tómalo como disposición.',
            elements: [{
                    element: 'div',
                    styles: 'top: 19%;left: 28%;height: 2%;width: 13.8%;',
                    correct: 'true',
                    goto: 20
                }
            ]
        }, 20: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_25.png',
            rubric: 'Modifica el layout suprimiendo el campo “Posición” y “Organización de Compras” y tómalo como disposición.',
            elements: [{
                    element: 'div',
                    styles: 'top: 46.6%;left: 40.7%;height: 2.5%;width: 1.9%;',
                    correct: 'true',
                    goto: 21
                }
            ]
        }, 21: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_26.png',
            rubric: 'Modifica el layout suprimiendo el campo “Posición” y “Organización de Compras” y tómalo como disposición.',
            elements: [{
                    element: 'div',
                    styles: 'top: 67.1%;left: 57%;height: 2.5%;width: 1.6%;',
                    correct: 'true',
                    goto: 22
                }
            ]
        }, 22: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_27.png',
            rubric: 'Observa el mensaje en la parte inferior de la ventana.',
            elements: [{
                    element: 'div',
                    styles: 'top: 97%;left: 1.3%;height: 2.7%;width: 17%;',
                    correct: 'true',
                    goto: 23
                }
            ]
        }, 23: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_28.png',
            rubric: 'Graba el layout tomado con nombre “PRUEBA” – Layout Prueba para que solamente sea visible para el usuario de creación.',
            elements: [{
                    element: 'div',
                    styles: 'top: 21%;left: 27.5%;height: 2.7%;width: 14%;',
                    correct: 'true',
                    goto: 24
                }
            ]
        }, 24: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_29.png',
            rubric: 'Graba el layout tomado con nombre “PRUEBA” – Layout Prueba para que solamente sea visible para el usuario de creación.',
            goto: 25,
            elements: [{
                    element: 'input',
                    type: 'text',
                    styles: 'top: 40.5%;left: 15%;height: 1.5%;width: 7%;',
                    correct: 'PRUEBA'
                },
                {
                    element: 'input',
                    type: 'text',
                    styles: 'top: 42.6%;left: 15%;height: 1.5%;width: 19.4%;',
                    correct: 'Layout Prueba'
                }
            ]
        }, 25: {
            titulo: '2.	Informes en SAP: Parametrización de Informes',
            img: 'img/img_30.png',
            rubric: 'Observa el mensaje en la parte inferior de la ventana.',
            elements: [{
                    element: 'div',
                    styles: 'top: 97%;left: 1.3%;height: 2.7%;width: 17%;',
                    correct: 'true',
                    goto: 26
                }
            ]
        }, 26: {
            titulo: 'Fin del tutorial',
            img: 'img/img_30.png',
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