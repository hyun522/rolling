import { styled } from 'styled-components';
import CardListUl from './CardListUl';

const MainContent = styled.div`
  position: relative;
  background-image: ${({ data }) =>
    data?.backgroundColor ? 'none' : `url(${data?.backgroundImageURL})`};
  background-color: ${({ data }) => data?.backgroundColor || 'transparent'};

  width: 100%;
  height: 1080px;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

const Main = ({ isEditMode, data, onClick, id }) => {
  return (
    <MainContent data={data}>
      <CardListUl
        isEditMode={isEditMode}
        data={data}
        onClick={onClick}
        id={id}
      />
    </MainContent>
  );
};

export default Main;
