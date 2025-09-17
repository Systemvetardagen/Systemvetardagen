import type { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const customFetch = async (
  paramUrl: string,
  params?: Record<string, unknown>
) => {
  try {
    const config: AxiosRequestConfig = {
      url: `/${paramUrl}`,
      method: "GET",
      params,
    };

    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default customFetch;
