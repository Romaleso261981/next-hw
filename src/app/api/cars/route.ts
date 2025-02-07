import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get("endpoint") || "cars";

    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    const data = response.data;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Помилка при отриманні даних з API:", error);
    return NextResponse.json(
      { message: "Помилка при отриманні даних", error: error },
      { status: 500 }
    );
  }
}
