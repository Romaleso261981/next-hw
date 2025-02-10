"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import styles from "./carForm.module.css";
import { useState } from "react";
import { addCar } from "@/service/api.service";

interface CarFormInputs {
  id: number;
  brand: string;
  price: number;
  year: number;
}

const schema = Joi.object({
  brand: Joi.string().required(),
  price: Joi.number().required().min(0).max(1000000),
  year: Joi.number().required().min(1990).max(2024)
});

export const CarForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    CarFormInputs
  >({
    resolver: joiResolver(schema)
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: CarFormInputs) => {
    setLoading(true);
    try {
      const response = await addCar(data);

      alert(`Car created successfully! ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input {...register("brand")} placeholder="Brand" />
        {errors.brand &&
          <p className={styles.error}>
            {errors.brand.message}
          </p>}
      </div>
      <div>
        <input type="number" {...register("price")} placeholder="Price" />
        {errors.price &&
          <p className={styles.error}>
            {errors.price.message}
          </p>}
      </div>
      <div>
        <input type="number" {...register("year")} placeholder="Year" />
        {errors.year &&
          <p className={styles.error}>
            {errors.year.message}
          </p>}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Car"}
      </button>
    </form>
  );
};
