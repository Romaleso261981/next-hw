"use client";

import React from "react";

import { useRouter } from "next/navigation";

import styles from "./car.module.css";
import { Car } from "@/types/types";

export default function CarComponent({ car }: { car: Car }) {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/cars/${id}`);
  };

  return (
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
  );
}
