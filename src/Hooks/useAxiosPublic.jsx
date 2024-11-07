import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://sohel-industries-age-calculator-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
