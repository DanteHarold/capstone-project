export const message = {
  id: "message",
  title:
    ", su opinión es valiosa para nosotros y nos ayudará a comprender mejor la problemática de la violencia de género. Por favor, le pedimos que responda con sinceridad y honestidad para que podamos tomar medidas efectivas para prevenir la violencia en contra de las mujeres. Sus respuestas serán completamente anónimas y confidenciales.Gracias por su colaboración.",
};

export const forms = {
  form: [
    {
      label:
        "1. ¿De qué manera él es celoso con usted en forma constante y violenta? ¿Por ejemplo, le dice “si no eres mía, no serás de nadie”)?",
      type: "text",
      name: "p1",
      id: "p1",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Carácteres",
        },
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "2. ¿Cómo crees que él es capaz de matarla?",
      type: "text",
      name: "p2",
      id: "p2",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "3. ¿Qué arma uso él (pistola, cuchillo, palo, piedra, tijera, etc.) contra usted o la ha amenazado con algún objeto contundente o peligroso (tijeras, machete, etc.)?",
      type: "text",
      name: "p3",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "4. ¿Cuántas veces te ha intentado ahorcar?",
      type: "text",
      name: "p4",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "5. ¿De qué manera te amenaza él con suicidarse o hacerse daño?",
      type: "text",
      name: "p5",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "6. ¿Cuántas veces te ha abofeteado, empujado o zarandeado?",
      type: "text",
      name: "p6",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "7. ¿Por qué sientes que no puedes discutir con él?",
      type: "text",
      name: "p7",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "8. ¿De qué manera ha bromeado o desprestigiado tu condición de mujer?",
      type: "text",
      name: "p8",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "9. ¿Frecuentemente insiste en tocamientos que no te son agradables y que tú no quieres?",
      type: "text",
      name: "p9",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "10. ¿Qué palabras usa para criticarte, insultarte o gritarte?",
      type: "text",
      name: "p10",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "11. ¿Qué reglas impone sobre la relación (horarios, días, etc.), de acuerdo con su conveniencia exclusiva?",
      type: "text",
      name: "p11",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "12. ¿De qué manera te manipula con mentiras?",
      type: "text",
      name: "p12",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "13. ¿Cuántas veces te humillo en público?",
      type: "text",
      name: "p13",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "14. ¿Cuántas veces te dejo de hablarte o desaparece por varios días, sin dar explicaciones, como manera de demostrar su enfado?",
      type: "text",
      name: "p14",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "15. ¿Qué palabras usa para ridiculizar tu forma de expresarte?",
      type: "text",
      name: "p15",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "16. ¿Qué amenazas utiliza con suicidarse o hacerse daño si lo dejas?",
      type: "text",
      name: "p16",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "17. ¿Cuántas veces te fuerza a desnudarte cuando tú no quieres?",
      type: "text",
      name: "p17",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "18. ¿Cuántas veces te ha golpeado?",
      type: "text",
      name: "p18",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label:
        "19. ¿Qué palabras utiliza para humillarte en público?, y ¿Cada cuanto tiempo lo realiza?",
      type: "text",
      name: "p19",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
    {
      label: "20. ¿Sientes que te critica injustamente?",
      type: "text",
      name: "p20",
      placeholder: "Escribe Tu Respuesta",
      value: "",
      validations: [
        {
          type: "required",
          message: "Campo Requerido",
        },
      ],
    },
  ],
};
