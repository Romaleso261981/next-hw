import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID параметр є обов'язковим" });
    }

    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    const data = response.data;

    return res.status(200).json(data);
  } catch (error) {
    console.error("Помилка при отриманні даних з API:", error);

    if (axios.isAxiosError(error)) {
      return res.status(500).json({
        message: "Помилка при отриманні даних з API",
        error: error.message
      });
    }

    return res.status(500).json({
      message: "Невідома помилка",
      error: String(error)
    });
  }
}
