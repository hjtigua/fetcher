import axios, { AxiosRequestConfig }  from 'axios';

const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,    
};

export const restaurantApi =  axios.create(config); 