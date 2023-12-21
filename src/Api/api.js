const BASE_URL = 'https://rolling-api.vercel.app/';
const BASE_QUERY = '2-8/';

// 롤링페이퍼주인장 Fetch.
export const QuestionPersonFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}/`);
  const result = response.json();
  return result;
};

// 메시지 받아오기
export const MessagePersonFetch = async (id) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}/recipients/${id}/messages/?limit=8&offset=8`,
  );
  const result = response.json();
  return result;
};

// 롤링페이퍼주인장 삭제하기.
export const QuestionDeleteFetch = async (id) => {
  const response = await fetch(`${BASE_URL}${BASE_QUERY}recipients/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

// 휴지통 버튼클릭시 메시지 삭제하기.
export const MessageDeleteFetch = async (id) => {
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

  // eslint-disable-next-line consistent-return
  return;
};

export { getInformation, getInformationLIke };

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

export const getReactions = async (id) => {
  const response = await fetch(
    `${BASE_URL}${BASE_QUERY}/recipients/${id}/reactions/`,
  );

  if (!response.ok) {
    throw new Error('이모티콘 조회에 실패했습니다');
  }

  const result = await response.json();
  return result;
};
