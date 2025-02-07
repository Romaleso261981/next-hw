import axios, { AxiosResponse } from "axios";

export enum apiBasePath {
  CARSBASEURL = "http://owu.linkpc.net/carsAPI/v1",
  DAMMYJSON = "https://dummyjson.up.railway.app",
  JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com"
}
// https://next-hw-two.vercel.app/

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://next-hw-two.vercel.app";

const api = axios.create({
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

// export const addData = async <T, R>(endpoint: string, data: T): Promise<R> => {
//   try {
//     console.log(`${API_BASE_URL}/${endpoint}`);
//     const response = await axios.put<R>(`${API_BASE_URL}/${endpoint}`, data, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error putting data:", error);
//     throw error;
//   }
// };

// export const deleteData = async (endpoint: string) => {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting data:", error);
//     throw error;
//   }
// };
