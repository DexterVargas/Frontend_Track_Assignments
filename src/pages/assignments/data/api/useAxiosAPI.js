import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com/search/photos?page=1&query=',
    headers: {}
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