import axios from "axios";
import { baseUrl } from "./utils/constants";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
