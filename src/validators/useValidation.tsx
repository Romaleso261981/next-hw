import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  brand: Joi.string().required(),
  price: Joi.number().required().min(0).max(1000000),
  year: Joi.number().required().min(1990).max(2024)
});

export const useValidation = () => {
  return joiResolver(schema);
};
