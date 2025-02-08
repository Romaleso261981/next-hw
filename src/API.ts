import axios, { AxiosResponse } from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://next-hw-two.vercel.app";

export const api = axios.create({
  baseURL: URL
});

export const getData = async <T>(url: string): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.get<T>(url);
    if (response.status !== 200) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async <T, R>(
  url: string,
  data: T
): Promise<AxiosResponse<R>> => {
  try {
    const response = await api.post<R>(url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.status !== 201) {
      throw new Error(`Error posting data: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
