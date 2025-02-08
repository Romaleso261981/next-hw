import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

export async function GET(request: NextRequest) {
  try {
    // Отримуємо searchParams із запиту
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get("endpoint") || "cars";

    // Виконуємо запит до зовнішнього API
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    const data = response.data;

    // Повертаємо успішну відповідь із JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error("Помилка при отриманні даних з API:", error);

    // Якщо axios генерує помилку, обробляємо її
    if (axios.isAxiosError(error)) {
      return NextResponse.json({
        message: "Помилка при отриманні даних з API",
        error: error.message
      });
    }

    // Для інших типів помилок
    return NextResponse.json(
      { message: "Невідома помилка", error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { brand, price, year } = body;

    // Перевірка наявності необхідних полів
    if (!brand || !price || !year) {
      return NextResponse.json(
        { message: "Всі поля (brand, price, year) повинні бути заповнені" },
        { status: 400 }
      );
    }

    // Виконуємо запит до зовнішнього API для додавання нової карточки
    const response = await axios.post(`${BASE_URL}/cars`, {
      brand: "brand",
      price: 1254,
      year: 2021
    });

    const data = response.data;

    // Повертаємо успішну відповідь із JSON
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Помилка при додаванні даних до API:", error);

    // Якщо axios генерує помилку, обробляємо її
    if (axios.isAxiosError(error)) {
      return NextResponse.json({
        message: "Помилка при додаванні даних до API",
        error: error.message
      });
    }

    // Для інших типів помилок
    return NextResponse.json(
      { message: "Невідома помилка", error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET_BY_ID(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    console.log("id", id);

    if (!id) {
      return NextResponse.json(
        { message: "ID параметр є обов'язковим" },
        { status: 400 }
      );
    }

    const response = await axios.get(`${BASE_URL}/cars/${id}`);
    const data = response.data;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Помилка при отриманні даних з API:", error);

    if (axios.isAxiosError(error)) {
      return NextResponse.json({
        message: "Помилка при отриманні даних з API",
        error: error.message
      });
    }

    return NextResponse.json(
      { message: "Невідома помилка", error: String(error) },
      { status: 500 }
    );
  }
}
