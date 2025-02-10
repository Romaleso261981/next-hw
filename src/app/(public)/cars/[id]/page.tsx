"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./car.module.css";
import { fetchData } from "@/service/api.service";
import { Car } from "@/types/types";

async function fetchCar(id: string | string[]): Promise<Car | null> {
  const cars = await fetchData<Car[]>("cars");
  return cars.find(car => car.id === Number(id)) || null;
}

const CarsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      if (id) {
        fetchCar(id).then(fetchedCar => {
          setCar(fetchedCar);
          setLoading(false);
        });
      }
    },
    [id]
  );

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return car
    ? <div className={styles.car}>
        <h2 className={styles.carBrand}>
          {car.brand}
        </h2>
        <p className={styles.carDetails}>
          Price: {car.price}
          <br />
          Year: {car.year}
        </p>
      </div>
    : <div className={styles.container}>Car not found</div>;
};

export default CarsPage;
