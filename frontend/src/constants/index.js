export const message = {
  id: "message",
  title:
    ", Thank you for participating in this quiz on femicide! Your opinion and perspective are of great importance to better understand this social problem that affects women all over the world. Feminicide is an extreme form of gender violence that carries devastating consequences for the victims and their communities.This questionnaire aims to obtain valuable information on perceptions, knowledge and attitudes related to femicide.",
};

export const forms = {
  form: [
    {
      label:
        "1. Does he impose rules on you about the relationship according to his exclusive convenience? If your answer is yes, what are they?",
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
        "2. Is he constantly and violently jealous of you? If your answer is yes. How does he do it?",
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
        "3. Has he joked or debunked your womanhood, if your answer is yes. How does he do it?",
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
        "4.Has he ignored your feelings? If your answer is yes, how does he do it?",
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
        "He criticizes you, insults you or yells at you?. If your answer is yes, how does he do it?",
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
        "6.He thinks that women are inferior and says that they must obey men. If your answer is yes, how does he do it?",
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
        "7.Has he hit you, pushed you or any other form of aggression? If your answer is yes, how does he do it?",
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
        "8. He humiliates you in public, if your answer is yes, how does he do it?",
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
