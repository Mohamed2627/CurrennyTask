import React, { useEffect } from 'react'
import currencyAxios from './currencyAxios';

const AxiosInterceptors = ({ children }) => {


  useEffect(() => {
    // Add a request interceptor to Currency axios
    const currencyAxiosRequestInterceptors = currencyAxios.interceptors.request.use(
      (config) => {
        // The was for the first API I have tried
        // config.url += (config.url.includes('?') ? '&' : '?') + 'api_key=MbIsHP2LJCOHxrL5hCXZHGT3qRSslDAc';
        return config;
      }, (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      currencyAxios.interceptors.request.eject(currencyAxiosRequestInterceptors);
    }
  }, [])

  return (
    <>{children}</>
  )
}

export default AxiosInterceptors