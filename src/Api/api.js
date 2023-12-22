const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8/';

// 롤링페이퍼주인장 Fetch.
const QuestionPersonFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}/`);
  const result = response.json();
  return result;
};

// 메시지 받아오기
const MessagePersonFetch = async (id) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}recipients/${id}/messages/?limit=8`,
  );
  const result = response.json();
  return result;
};

// 롤링페이퍼주인장 삭제하기.
const QuestionDeleteFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// 휴지통 버튼클릭시 메시지 삭제하기.
const MessageDeleteFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}messages/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// 인기 롤링페이퍼
const getInformationLIke = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}${BASE_QUERY}recipients/?limit=10&sort=like`,
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
  return null;
};

// 최근에 만든 롤링페이퍼
/* eslint-disable no-useless-return */
const getInformation = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}${BASE_QUERY}recipients/?limit=10`,
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
  return null;
};

export const addReaction = async (id, emoji) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}recipients/${id}/reactions/`,
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

export const getReactions = async (id) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}recipients/${id}/reactions/`,
  );

  if (!response.ok) {
    throw new Error('이모티콘 조회에 실패했습니다');
  }

  const result = await response.json();
  return result;
};

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
    `${BASE_URL}2-8/recipients/${messageData.recipientId}/messages/`,
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

// eslint-disable-next-line consistent-return
const getDataBackgroundImg = async () => {
  try {
    const response = await fetch(`${BASE_URL}background-images/`);
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
};

// eslint-disable-next-line consistent-return
const postUserData = async (sendData) => {
  console.log(sendData);
  try {
    const response = await fetch(`${BASE_URL}2-8/recipients/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendData),
    });
    // if (!response.ok) {
    // throw new Error('리뷰를 불러오는데 실패함');
    // }
    const body = await response.json();
    return body;
  } catch (err) {
    console.error('에러입니다', err);
  }
};

export {
  QuestionPersonFetch,
  MessagePersonFetch,
  QuestionDeleteFetch,
  MessageDeleteFetch,
  getInformation,
  getInformationLIke,
  fetchProfileImg,
  fetchRecipient,
  createMessage,
  getDataBackgroundImg,
  postUserData,
};
