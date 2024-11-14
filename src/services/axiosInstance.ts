import axios from "axios";
import { INTERNAL_BASE_URL, PUBLIC_BASE_URL } from "@/constants/allEnv";
import { getCookie, removeCookie } from "@/utils";

// Public Axios instance (no token required)
const axiosPublic = axios.create({
  baseURL: PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Internal Axios instance (requires token)
const axiosInternal = axios.create({
  baseURL: INTERNAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to axiosInternal to include the token
axiosInternal.interceptors.request.use(
  async (config) => {
    // Retrieve the session to get the token
    // const token = 'session?.user?.token;'
    const token = getCookie("token");
    // // If the token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any errors that occur during the request setup
    return Promise.reject(error);
  }
);

// Response interceptors (for error handling)
axiosInternal.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.status === 401) {
      removeCookie('token')
      window.location.href = '/auth/login';
    }
    // Handle specific error status codes if needed
    throw error;
  }
);

axiosPublic.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export { axiosInternal, axiosPublic };
