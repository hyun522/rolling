const BASE_URL = 'https://rolling-api.vercel.app/';

// eslint-disable-next-line consistent-return
export const getDataBackgroundImg = async () => {
  try {
    const response = await fetch(`${BASE_URL}background-images/`);
    const body = await response.json();
    console.log(body);
    return body;
  } catch (err) {
    console.log(err.message);
  }
};

// eslint-disable-next-line consistent-return
export const postUserData = async (sendData) => {
  console.log(sendData);
  try {
    const response = await fetch(`${BASE_URL}2-8/recipients/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendData),
    });
    if (!response.ok) {
      // throw new Error('리뷰를 불러오는데 실패함');
    }
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err);
  }
};
