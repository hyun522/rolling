const BASE_URL = 'https://rolling-api.vercel.app/';
// const BASE_QUERY = '2-8';

// response is BackGroundImgs
const FetchBackGround = async () => {
  const response = await fetch(`${BASE_URL}background-images/`);
  const result = response.json();
  // console.log(result);
  return result;
};

export default FetchBackGround;

// const FetchMockData = async () => {
//   const response = await fetch(``)
// }
