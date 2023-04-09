import Axios from 'axios';
const KEY = 'AIzaSyD6y9yv8_NGSSCYvvyf-0FgFkTM_aOEVqM';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        key: KEY
    }
});

// import { createApi } from 'unsplash-js';
// import nodeFetch from 'node-fetch';

//  const api = createApi({
//     // Don't forget to set your access token here!
//     // See https://unsplash.com/developers
//     accessKey: "fQzuA7gox2Futpg5mk8z97DfNXGccoG06ZTI5FXDv4E",
//     fetch: nodeFetch,
// });
// export default api;