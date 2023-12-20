import HeaderUser from './Header/Header_service';
import Headers from './Header/Header';
import Main from './Main/Main';
import Mock from '../mock.json';

const MessageListPage = () => {
  // 목데이터 배열로 받아서 0번이지만 실제 api주소는 1개의 배열만 온다.
  const MockData = Mock.results[0];
  return (
    <>
      <Headers />
      <HeaderUser />
      <Main MockData={MockData} />
    </>
  );
};

export default MessageListPage;
