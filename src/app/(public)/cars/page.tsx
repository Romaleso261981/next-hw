import { Car } from "@/types/types";

import styles from "./carsPage.module.css";
import CarsList from "@/components/CarsList/CarsList";
import { getCars } from "@/server-action/serverActons";

async function fetchCars(): Promise<Car[]> {
  return await getCars();
}

export default async function CarsPage() {
  const cars = await fetchCars();

  return cars
    ? <CarsList cars={cars} />
    : <div className={styles.container}>Loading...</div>;
}
