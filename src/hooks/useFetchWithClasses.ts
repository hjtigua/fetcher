import axios from "axios";
import { useEffect, useState } from "react";
import { IResponse } from "../interfaces/IResponse";
import { ITables } from "../interfaces/ITables";
import { HttpService } from "../services/HttpService";

export const useFetchWithClasses = <T>(): IResponse<T> => {
  const [tables, settables] = useState<IResponse<T>>({
      loading: true,
      data: undefined,
      errorMessage: undefined,
      responseCode: undefined
  });
  useEffect(() => {
    const http = new HttpService();
    http.httpGet<T>("http://127.0.0.1:8000/api/mesas").then((response) => {
        settables({
            loading: false,
            data: response,
            errorMessage: undefined,
            responseCode: 200
        });
    }).catch(error => {
        settables({
            loading: false,
            data: undefined,
            errorMessage: error.message,
            responseCode: 500
        });
    })
  }, []);

  return tables;
};
