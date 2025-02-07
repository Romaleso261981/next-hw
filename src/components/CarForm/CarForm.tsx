import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import styles from "./carForm.module.css";

interface CarFormInputs {
  brand: string;
  price: number;
  year: number;
}

const schema = Joi.object({
  brand: Joi.string().required(),
  price: Joi.number().required().min(0),
  year: Joi.number().required().min(1886).max(new Date().getFullYear())
});

export const CarForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    CarFormInputs
  >({
    resolver: joiResolver(schema)
  });

  const onSubmit = async (data: CarFormInputs) => {
    try {
      const response = await fetch("https://185.69.152.209/carsAPI/v1/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Car created successfully!");
    } catch (error) {
      alert(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input {...register("brand")} placeholder="brand" />
        {errors.brand &&
          <p>
            {errors.brand.message}
          </p>}
      </div>
      <div>
        <input type="number" {...register("price")} placeholder="price" />
        {errors.price &&
          <p>
            {errors.price.message}
          </p>}
      </div>
      <div>
        <input type="number" {...register("year")} placeholder="year" />
        {errors.year &&
          <p>
            {errors.year.message}
          </p>}
      </div>
      <button type="submit">Create Car</button>
    </form>
  );
};
