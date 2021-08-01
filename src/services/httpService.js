import {toast} from "react-toastify";
import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
    if(expectedError){
       toast.error("Expected Error!!!")
    }else{
      toast.error("UnExpected Error")
    }
    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put
}
export default http;