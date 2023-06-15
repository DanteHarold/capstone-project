import * as Yup from "yup";

const generateValidations = (field) => {
  let schema = Yup[field.typeValue ? field.typeValue : "string"]();

  for (const rule of field.validations) {
    switch (rule.type) {
      case "isTrue":
        schema = schema.isTrue(rule.message);
        break;

      case "isEmail":
        schema = schema.email(rule.message);
        break;

      case "minLength":
        schema = schema.min(rule?.value, rule.message);
        break;

      default:
        schema = schema.required(rule.message);
        break;
    }
  }

  return schema;
};

import { forms } from "../../constants";

export const getInputs = (section) => {
  let initialValues = {};

  let validationsFields = {};

  for (const field of forms[section]) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }
  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues,
    inputs: forms[section],
  };
};
