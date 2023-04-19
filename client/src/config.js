
// export const IMGS_URL =
// 'https://fashion-e-commerce.onrender.com/public';


//     export const API_URL =
//    'https://fashion-e-commerce.onrender.com/api';


// export const IMGS_URL =
// 'http://localhost:3000/public';


//     export const API_URL =
//   process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/api';

  export const IMGS_URL =
  process.env.NODE_ENV === 'production' ? '/public' : 'http://localhost:3000/public';

 

  export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';
