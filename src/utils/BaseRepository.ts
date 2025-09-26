import type { IBaseRepository } from "./IBaseRepository";
// import {apiClient} from "./api"
import axios, { type AxiosResponse } from "axios";
export const BaseRepository = <T>(): IBaseRepository<T> => {

  // Fetch all items
  const API_URL = import.meta.env.VITE_API_URL ?? '';

  const apiClient = axios.create({
  baseURL: API_URL, // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
  },
});

  const getAll = async (): Promise<T[]> => {
    const response: AxiosResponse<T[]> = await axios.get(API_URL+'getAll');
    return response.data;
  };

  const getById = async (id: string): Promise<T | null> => {
    const response: AxiosResponse<T> = await axios.get(`${API_URL}/${id}`);
    return response.data;

  };

  const create = async (item: T): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiClient.post(API_URL+'create', item);
      return response?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
       return item;
      } else {
        return item;
      } 
    }
  };

  const update = async (id: string, item: Partial<T>): Promise<T | null> => {
    const response: AxiosResponse<T> = await axios.put(`${API_URL}/${id}`, item);
    return response.data;
  };

  const remove = async (id: string): Promise<boolean> => {
    const response = await axios.delete(`${API_URL}/${id}`);
    if (response.status)
      return true;//response.status;
    else
      return false;
  };

  return { getAll, getById, create, update, remove };
};