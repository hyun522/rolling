const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8';

// response is BackGroundImgs
const FetchBackGround = async () => {
  const response = await fetch(`${BASE_URL}background-images/`);
  const result = response.json();
  return result;
};

export default FetchBackGround;

export const addReaction = async (id, emoji) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}/recipients/${id}/reactions/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ emoji, type: 'increase' }),
    },
  );

  if (!response.ok) {
    throw new Error('이모티콘 등록에 실패했습니다');
  }

  const result = await response.json();
  return result;
};
