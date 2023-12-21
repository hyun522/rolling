const BASE_URL = 'https://rolling-api.vercel.app/';

const fetchProfileImg = async () => {
  const response = await fetch(`${BASE_URL}profile-images/`);
  const data = await response.json();
  return data;
};

const fetchRecipient = async () => {
  const response = await fetch(`${BASE_URL}2-8/recipients/`);
  const data = await response.json();
  return data;
};

const createMessage = async (messageData) => {
  const response = await fetch(
    `${BASE_URL}recipients/${messageData.recipientId}/messages/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    },
  );
  if (!response.ok) {
    throw new Error('메세지를 생성하는 데 실패했습니다.');
  }
  const body = await response.json();
  return body;
};

// eslint-disable-next-line import/prefer-default-export
export { fetchProfileImg, fetchRecipient, createMessage };
