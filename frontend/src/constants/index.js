export const message = {
  id: "message",
  title:
    ", ¡Gracias por participar en este test sobre feminicidio! Tu opinión y perspectiva son de gran importancia para comprender mejor este problema social que afecta a las mujeres en todo el mundo. El feminicidio es una forma extrema de violencia de género que conlleva consecuencias devastadoras para las víctimas y sus comunidades. Este cuestionario tiene como objetivo obtener información valiosa sobre las percepciones, conocimientos y actitudes relacionadas con el feminicidio.",
  title2: "Test de Violencia",
  subtitle:
    "Esta encuesta es anónima y las respuestas se analizarán en conjunto, por lo que no se conocerán los datos de nadie en particular. En este sentido, para responder la encuesta, piensa en una relación (que estés, hayas mantenido, al menos, durante un mes o más). En relación a esto, responda las siguientes preguntas con sinceridad.",
};

export const forms = {
  form: [
    {
      label:
        "1. ¿Impone reglas sobre la relación (días, horarios, tipos de salidas), de acuerdo con su conveniencia exclusiva? Si tu respuesta es sí, ¿cuáles son?",
      type: "text",
      name: "p1",
      id: "p1",
      key: "p1",
      placeholder: "Type your answers",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "2. ¿Es celoso con usted en forma constante y violenta? Si tu respuesta es sí. ¿Cómo lo hace?",
      type: "text",
      name: "p2",
      id: "p2",
      key: "p2",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "3. ¿Ha bromeado o desprestigiado tu condición de mujer?, ¿De qué manera?",
      type: "text",
      name: "p3",
      id: "p3",
      key: "p3",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "4. ¿Ha ignorado tus sentimientos? Si tu respuesta es sí, ¿cómo lo hace?",
      type: "text",
      name: "p4",
      id: "p4",
      key: "p4",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "5. ¿Te critica, te insulta o te grita en presencia de amigos o familiares?. Si tu respuesta es sí, ¿Cómo lo hace?",
      type: "text",
      name: "p5",
      id: "p5",
      key: "p5",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "6. ¿Te sientes obligada/o a mantener sexo? Si respondió SI, ¿De qué manera?",
      type: "text",
      name: "p6",
      id: "p6",
      key: "p6",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "7. ¿Te ha golpeado, empujado o cualquier otra forma de agresión? Si tu respuesta es sí, ¿Cómo lo hace?",
      type: "text",
      name: "p7",
      id: "p7",
      key: "p7",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
    {
      label:
        "8. ¿Te humilla en público?",
      type: "text",
      name: "p8",
      id: "p8",
      key: "p8",
      placeholder: "Type your answer",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 10,
          message: "Min. 10 Characters",
        },
        {
          type: "required",
          message: "Answer Required",
        },
      ],
    },
  ],
};
