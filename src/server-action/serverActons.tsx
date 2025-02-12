"use server";

import { Car } from "@/types/types";
import sql from "better-sqlite3";
import { revalidatePath } from "next/cache";

const db = sql("cars.db");

export const saveCar = async (formData: FormData) => {
  const brand = formData.get("brand");
  const year = formData.get("year");
  const price = formData.get("price");
  const image = formData.get("image");

  db
    .prepare("INSERT INTO cars (brand, year, price,image) VALUES (?, ?, ?, ?)")
    .run(brand, year, price, image);
  revalidatePath("/");
};

export const getCars = async (): Promise<Car[]> => {
  return db.prepare("SELECT * FROM cars").all() as Car[];
};

export const getCarById = async (id: number): Promise<Car> => {
  return db.prepare("SELECT * FROM cars WHERE id = ?").get(id) as Car;
};

export const updateCar = async (id: number, formData: FormData) => {
  const brand = formData.get("brand");
  const year = formData.get("year");
  const price = formData.get("price");
  const image = formData.get("image");
  db
    .prepare(
      "UPDATE cars SET brand = ?, year = ?, price = ?, image = ? WHERE id = ?"
    )
    .run(brand, year, price, image, id);
  revalidatePath("/");
};

export const deleteCar = async (id: number) => {
  db.prepare("DELETE FROM cars WHERE id = ?").run(id);
  revalidatePath("/");
};
