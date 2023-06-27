import axios from 'axios'
const KEY_IMAGES = '37046560-081d25d951e10cecd03c40d51'
const instance = axios.create({
  baseURL: `https://pixabay.com/api/?q=cat&page=1&key=${KEY_IMAGES}&image_type=photo&orientation=horizontal&per_page=12`,
    headers: { 'Authorization': KEY_IMAGES },
    params: {
        orientation: 'horizontal',
         per_page:12,
   }
});
export const getImages = async (query, page) => {
  const { data } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
}

// import axios from 'axios';

// const KEY_IMAGES = '37046560-081d25d951e10cecd03c40d51';

// const instance = axios.create({
//   baseURL: `https://pixabay.com/api/?q=cat&page=1&key=${KEY_IMAGES}&image_type=photo&orientation=horizontal&per_page=12`
// });

// export const getImages = async (query, page) => {
//   const { data } = await instance.get(`search?query=${query}&page=${page}`);
//   return data;
// };
