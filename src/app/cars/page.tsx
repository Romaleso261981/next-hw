"use client";

import React, { useEffect, useState } from "react";

import styles from "./cars.module.css";
import { useRouter } from "next/navigation";
import { CarForm } from "@/components";

export interface Car {
  id: number;
  brand: string;
  price: number;
  year: number;
}

async function fetchCars(): Promise<Car[]> {
  const res = await fetch("/api/cars");

  return res.json();
}

const CarsPage: React.FC = () => {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Індикатор завантаження
  const [error, setError] = useState<string | null>(null); // Обробка помилок

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const carsData = await fetchCars();
        setCars(carsData);
      } catch (error) {
        setError("Failed to load cars. Please try again later.");
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id: number) => {
    router.push(`/cars/${id}`);
  };

  if (loading) {
    return <div className={styles.container}>Loading...</div>; // Індикатор завантаження
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p> {/* Повідомлення про помилку */}
      </div>
    );
  }

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
              Price: ${car.price}
            </p>
            <p>
              Year: {car.year}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CarsPage;
