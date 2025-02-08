import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

export async function GET(request: NextRequest) {
  try {
    // Отримуємо searchParams із запиту
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get("endpoint") || "cars"; // за замовчуванням "cars"

    // Виконуємо запит до зовнішнього API
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    const data = response.data;

    console.log(data);
    console.log(process.env.NODE_ENV === "development")

    // Повертаємо успішну відповідь із JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error("Помилка при отриманні даних з API:", error);

    // Якщо axios генерує помилку, обробляємо її
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: "Помилка при отриманні даних з API", error: error.message },
        { status: error.response?.status || 500 }
      );
    }

    // Для інших типів помилок
    return NextResponse.json(
      { message: "Невідома помилка", error: String(error) },
      { status: 500 }
    );
  }
}
