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

async function fetchCars(): Promise<Car[]> {
  const res = await fetch("/api/cars");

  return res.json();
}

const CarsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const carsData = await fetchCars();
          setCar(carsData.find(car => car.id === Number(id)) || null);
        } catch (error) {
          setError("Failed to load cars. Please try again later.");
          console.error("Error fetching cars:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
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
