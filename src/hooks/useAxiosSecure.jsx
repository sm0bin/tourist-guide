import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
    withCredentials: true
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('token');
        if (!token) {
            logOut();
            navigate('/login');
        }
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const { status } = error.response;
        if (status === 401 || status === 403) {
            logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default useAxiosSecure;