import { styled } from 'styled-components';
import enabled from '../assets/images/Enabled.svg';

const ColorDiv = styled.div`
  margin: 45px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin: 40px 0 340px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 320px;
    margin: 28px 0 82px;
    gap: 12px;
  }
`;
const ImgDiv = styled(ColorDiv)``;

const ShowColorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
  }
`;
const ShowImgDiv = styled(ShowColorDiv)`
  background-image: url(${(props) => props.src});
`;

const CppShowImgDiv = ({ backgroundImgs, selectImg, setSelectImg }) => {
  const handleImgChange = (img) => {
    setSelectImg(img);
  };

  return (
    <ImgDiv>
      {backgroundImgs.map((img, index) => (
        <ShowImgDiv
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          src={img}
          onClick={() => handleImgChange(img)}
        >
          {selectImg === img && <img src={enabled} alt="체크표시" />}
        </ShowImgDiv>
      ))}
    </ImgDiv>
  );
};
export default CppShowImgDiv;
