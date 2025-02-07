"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./car.module.css";

interface Car {
  id: number;
  brand: string;
  price: number;
  year: number;
}

const CarsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      const fetchCar = async () => {
        try {
          const response = await fetch(
            `http://owu.linkpc.net/carsAPI/v1/cars/${id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setCar(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchCar();
    },
    [id]
  );

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error: {JSON.stringify(error)}
      </div>
    );

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        Back
      </button>
      <h1 className={styles.mainTitle}>
        Car ID: {id}
      </h1>
      {car &&
        <div className={styles.car}>
          <h2 className={styles.carBrand}>
            {car.brand}
          </h2>
          <p className={styles.carDetails}>
            Price: {car.price}
            <br />
            Year: {car.year}
          </p>
        </div>}
    </div>
  );
};

export default CarsPage;
