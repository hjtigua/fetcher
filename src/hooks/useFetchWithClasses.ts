import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { IResponse } from "../interfaces/IResponse";

export const useFetchWithClasses = <T>(dataSource: AxiosInstance): IResponse<T> => {
  const [tables, settables] = useState<IResponse<T>>({
      loading: true,
      data: undefined,
      errorMessage: undefined,
      responseCode: undefined
  });
  useEffect(() => {
    dataSource.get<T>("mesas").then(({data}) => {
        settables({
            loading: false,
            data,
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
