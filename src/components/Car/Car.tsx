"use client";

import React from "react";

import { useRouter } from "next/navigation";

import styles from "./car.module.css";
import { Car } from "@/types/types";
import { deleteCar } from "@/server-action/serverActons";
import Image from "next/image";

const defaultImage = "/images/BMW.jpg";

export default function CarComponent({ car }: { car: Car }) {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/cars/${id}`);
  };

  const url = car.image ? car.image : defaultImage;

  return (
    <div className={styles.carContainer}>
      <li
        key={car.id}
        className={styles.car}
        onClick={() => handleCardClick(car.id)}
      >
        <div>
          <Image src={url} alt={car.brand} width={200} height={200} />
        </div>
        <div>
          <h2>
            {car.brand}
          </h2>
          <p>
            Price: ${car.price}
          </p>
          <p>
            Year: {car.year}
          </p>
        </div>
      </li>
      <button onClick={() => deleteCar(car.id)}>Remove</button>
    </div>
  );
}
