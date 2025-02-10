import { Car } from "../types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${API_URL}/${url}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: T = await response.json();
  return data;
};

export const addCar = async (car: Car): Promise<Car> => {
  const response = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Car = await response.json();
  return data;
};
