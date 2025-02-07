"use client";

import React, { useEffect, useState } from "react";

import styles from "./cars.module.css";
import { useRouter } from "next/navigation";
import { CarForm } from "@/components";
import { getData } from "@/API";

interface Car {
  id: number;
  brand: string;
  price: number;
  year: number;
}

async function fetchCars(): Promise<Car[]> {
  const axisRes = await getData<Car[]>("cars");

  if (axisRes.statusText !== "OK") {
    throw new Error("Failed to fetch cars");
  }

  return axisRes.data;
}

const CarsPage: React.FC = () => {
  const router = useRouter();

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/cars/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Cars</h1>
      <CarForm />
      <ul className={styles.carsList}>
        {cars.map(car =>
          <li
            key={car.id}
            className={styles.car}
            onClick={() => handleCardClick(car.id)}
          >
            <h2>
              {car.brand}
            </h2>
            <p>
              {car.price}
            </p>
            <p>
              {car.year}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CarsPage;
