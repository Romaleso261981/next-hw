import React from "react";
import styles from "./posts.module.css";

interface Car {
  id: number;
  brand: string;
  price: number;
  year: number;
}

// Функція для отримання даних
async function fetchCars(): Promise<Car[]> {
  const response = await fetch("http://localhost:3000/api/cars");
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return response.json();
}

export default async function PostsPage() {
  const cars = await fetchCars();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Cars</h1>
      <ul className={styles.postsList}>
        {cars.map(car =>
          <li key={car.id} className={styles.post}>
            <h2>
              {car.brand}
            </h2>
            <p>
              Price: {car.price}
            </p>
            <p>
              Year: {car.year}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
