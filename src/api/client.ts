import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";
import decamelizeKeys from "decamelize-keys";

import { BASE_API_URL } from "@config/env";

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== "object" || value === null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
};

const shouldTransformBody = (data: unknown): data is Record<string, unknown> => {
  if (!isPlainObject(data)) return false;
  if (typeof FormData !== "undefined" && data instanceof FormData) return false;
  if (typeof URLSearchParams !== "undefined" && data instanceof URLSearchParams) return false;
  if (typeof Blob !== "undefined" && data instanceof Blob) return false;
  return true;
};

const decamelizeRequest = (config: InternalAxiosRequestConfig) => {
  if (shouldTransformBody(config.data)) {
    config.data = decamelizeKeys(config.data, { deep: true });
  }
  if (shouldTransformBody(config.params)) {
    config.params = decamelizeKeys(config.params, { deep: true });
  }
  return config;
};

const camelizeResponse = (response: AxiosResponse) => {
  const { data } = response;
  if (data && typeof data === "object" && !(data instanceof Blob) && !(data instanceof ArrayBuffer)) {
    response.data = camelcaseKeys(data, { deep: true });
  }
  return response;
};

export const api = axios.create({
  baseURL: BASE_API_URL,
});

api.interceptors.request.use(decamelizeRequest, (error) => Promise.reject(error));
api.interceptors.response.use(camelizeResponse, (error) => Promise.reject(error));
