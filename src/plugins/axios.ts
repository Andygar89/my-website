import axios from 'axios';
import get from 'lodash/get';

export default {  
    install: ({ config: { globalProperties: { $toast }}}, options) => {    
        axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API_URL;

        axios.interceptors.request.use((request) => {
          return request;
        });

        axios.interceptors.response.use((response) => {
          return response;
        }, (error) => {
          const { response } = error

          if (response.status === 500) {
            $toast.error(get(response, 'data.message', 'Oops! something went wrong.'))
          }

          return Promise.reject(error);
        })
    }
}
