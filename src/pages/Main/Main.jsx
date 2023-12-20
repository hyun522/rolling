import { styled } from 'styled-components';
import CardListUl from './CardListUl';

const MainContent = styled.div`
  position: relative;
  background-color: ${({ MockData }) =>
    MockData.backgroundColor || 'transparent'};
  background-image: ${({ MockData }) =>
    MockData.backgroundColor ? 'none' : `url(${MockData.backgroundImageURL})`};
  width: 100%;
`;

// 이거 작업 성공하면 이 데이터가 내 본체 jsx에 들어가면됨.
const Main = ({ MockData }) => {
  console.log(MockData);

  return (
    <MainContent MockData={MockData}>
      <CardListUl MockData={MockData} />
    </MainContent>
  );
};

export default Main;
