import { styled } from 'styled-components';
import CardListUl from './CardListUl';

const BackgroundColors = {
  green: '#D0F5C3',
  blue: '#B1E4FF',
  purple: '#ECD9FF',
  beige: '#FFE2AD',
};

const MainContent = styled.div`
  background-image: ${(props) =>
    props.data.backgroundImageURL
      ? `url(${props.data.backgroundImageURL})`
      : null};
  background-color: ${(props) => BackgroundColors[props.data.backgroundColor]};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  width: 100%;
  min-height: 100vh;
  /* @media screen and (max-width: 767px) {
    height: 100%;
  } */
`;

const Main = ({ isEditMode, data, id, messageData }) => {
  return (
    <MainContent data={data}>
      <CardListUl
        messageData={messageData}
        isEditMode={isEditMode}
        data={data}
        // onClick={onClick}
        id={id}
      />
    </MainContent>
  );
};

export default Main;

// background-image: ${({ data }) =>
// data?.backgroundColor ? 'none' : `url(${data?.backgroundImageURL})`};
// background-color: ${({ data }) => data?.backgroundColor || 'transparent'};
