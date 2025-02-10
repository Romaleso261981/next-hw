import { fetchData } from "@/service/api.service";
import { Car } from "@/types/types";

import styles from "./carsPage.module.css";
import CarsList from "@/components/CarsList/CarsList";

async function fetchCars(): Promise<Car[]> {
  return await fetchData<Car[]>("cars");
}

export default async function CarsPage() {
  const cars = await fetchCars();

  return cars
    ? <CarsList cars={cars} />
    : <div className={styles.container}>Loading...</div>;
}
