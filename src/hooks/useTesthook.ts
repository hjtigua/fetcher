import axios from "axios";
import { useEffect, useState } from "react"
import { ITables } from "../interfaces/ITables"

export const useTesthook = () : ITables[] => {
    const [tables, settables] = useState<ITables[]>([]);    
    useEffect(() => {   
        const controller = new AbortController();                
        axios.get<ITables[]>('http://127.0.0.1:8000/api/mesas', {
          signal: controller.signal
       }).then((response) => {
           const resp =  response.data;
           settables(resp);
         }).catch(e => console.log(e));
         return () => controller.abort();
    }, [])
    
    return tables;
}