import { createContext, ReactElement } from "react"

interface IProps<T> {
    children: ReactElement | ReactElement[],
    data?: T;
    loading: boolean;
    errorMessage?: string;
    responseCode?: string;
}

export interface SecureDataContextProps { 
    payload: any
}


export const SecureDataContext = createContext({} as SecureDataContextProps);
const { Provider } = SecureDataContext;

export default function SecureData<T>( {children, data, loading, errorMessage, responseCode}: IProps<T>) {    
    if (loading) {
        return (
            <div>
                <strong>Loading...</strong>
            </div>
        )
    }
  
    if(!data){
        return (
            <div>
                <strong>{errorMessage}</strong>
            </div>
        )
    }

  return (
    <Provider value={{
        payload: data
    }}>
        {children}
    </Provider>
  )
}

