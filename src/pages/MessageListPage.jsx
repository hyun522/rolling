import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderUser from './Header/Header_service';
import Main from './Main/Main';
// import Data from '../mock.json';
import Header from '../components/Header';
import { QuestionPersonFetch } from '../Api/api';

const MessageListPage = () => {
  const navigate = useNavigate();
  const isEditMode = window.location.pathname.includes('/edit');
  const [data, setData] = useState(null);

  const QuestionFetch = async (userid) => {
    try {
      const response = await QuestionPersonFetch(userid);
      setData(response);
    } catch (error) {
      console.error('에러발생', error);
    }
  };

  const { id } = useParams();

  useEffect(() => {
    QuestionFetch(id);
  }, [id]);

  const handleDelete = () => {
    navigate('/list');
  };

  // 초기값 로딩창
  if (data === null) {
    return <div>로딩중</div>;
  }
  return (
    <>
      <Header hidden="true" />
      <HeaderUser data={data} />
      <Main
        isEditMode={isEditMode}
        data={data}
        onClick={handleDelete}
        id={id}
      />
    </>
  );
};

export default MessageListPage;
