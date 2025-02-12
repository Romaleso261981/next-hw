"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./car.module.css";
import { Car } from "@/types/types";
import FormEditionCar from "@/components/FormEditionCar/FormEditionCar";
import { getCarById } from "@/server-action/serverActons";
import Image from "next/image";

const defaultImage = "/images/BMW.jpg";

async function fetchCar(id: string | string[]): Promise<Car> {
  return await getCarById(Number(id));
}

const CarsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpenFormEdition, setIsOpenFormEdition] = useState(true);

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

  const url = car ? car.image : defaultImage;

  return car
    ? isOpenFormEdition
      ? <div className={styles.car}>
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
          <div>
            <button onClick={() => setIsOpenFormEdition(false)}>Edit</button>
          </div>
        </div>
      : <FormEditionCar />
    : <div className={styles.container}>Car not found</div>;
};

export default CarsPage;
