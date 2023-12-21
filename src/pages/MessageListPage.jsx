import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderUser from './Header/Header_service';
import Main from './Main/Main';
import Header from '../components/Header';
import {
  QuestionPersonFetch,
  MessagePersonFetch,
  // QuestionDeleteFetch,
} from '../Api/api';

const MessageListPage = () => {
  const isEditMode = window.location.pathname.includes('/edit');
  const [data, setData] = useState(null);
  const [messageData, setMessageData] = useState(null);
  // const [rollingDel, setRollingDel] = useState(null);

  const QuestionFetch = async (userid) => {
    try {
      const response = await QuestionPersonFetch(userid);
      setData(response);
    } catch (error) {
      console.error('에러발생', error);
    }
  };
  const MessageListPadge = async (userid) => {
    try {
      const response = await MessagePersonFetch(userid);
      setMessageData(response);
    } catch (error) {
      console.error('에러발생', error);
    }
  };

  // const rollingDelete = async (userid) => {
  //   try {
  //     const response = await QuestionDeleteFetch(userid);
  //     setRollingDel(response);
  //   } catch (error) {
  //     console.error('에러입니다', error);
  //   }
  // };

  const { id } = useParams();

  useEffect(() => {
    QuestionFetch(id);
    MessageListPadge(id);
    // rollingDelete(id);
  }, [id]);

  // const handleDelete = async () => {
  //   await QuestionFetch(id);
  //   navigate('/list');
  // };

  // 초기값 로딩창
  if (data === null) {
    return <div>로딩중</div>;
  }
  if (messageData === null) {
    return <div>로딩중</div>;
  }
  // if (rollingDel === null) {
  //   return <div>로딩중</div>;
  // }
  return (
    <>
      <Header hidden="true" />
      <HeaderUser data={data} />
      <Main
        messageData={messageData}
        isEditMode={isEditMode}
        data={data}
        // onClick={handleDelete}
        id={id}
      />
    </>
  );
};

export default MessageListPage;
