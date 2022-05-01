import axios from "axios";
export class HttpService {
  // constructor() {
  // }

 async httpGet<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;   
  }
}