// Define a generic type for the API response
export interface IApiResponse<T> {
  data: T;
  message?: string;
};