/* eslint-disable array-callback-return */
import { styled } from 'styled-components';
import enabled from '../assets/images/Enabled.svg';
import CppShowImgDiv from './CppShowImgDiv';

const COLOR_CHIPS = [
  { id: 1, option: 'beige' },
  { id: 2, option: 'purple' },
  { id: 3, option: 'blue' },
  { id: 4, option: 'green' },
];

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

const StyledDiv = styled(ShowColorDiv)`
  &.beige {
    background-color: #ffe2ad;
  }
  &.purple {
    background-color: #ecd9ff;
  }
  &.green {
    background-color: #b1e4ff;
  }
  &.blue {
    background-color: #d0f5c3;
  }
`;

const CppShowDiv = ({
  isColor,
  backgroundImgs,
  selectColor,
  setSelectColor,
  selectImg,
  setSelectImg,
}) => {
  const handleColorChange = (option) => {
    setSelectColor(option);
  };

  return (
    <div>
      {isColor ? (
        <ColorDiv>
          {COLOR_CHIPS.map((item) => (
            <StyledDiv
              key={item.id}
              className={item.option}
              onClick={() => handleColorChange(item.option)}
            >
              {selectColor === item.option && (
                <img src={enabled} alt="체크표시" />
              )}
            </StyledDiv>
          ))}
        </ColorDiv>
      ) : (
        <CppShowImgDiv
          backgroundImgs={backgroundImgs}
          selectImg={selectImg}
          setSelectImg={setSelectImg}
        />
      )}
    </div>
  );
};

export default CppShowDiv;
