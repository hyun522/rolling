import { styled } from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-top: 24px;
`;

const SelectButton = styled.button`
  box-sizing: content-box;
  background-color: #f6f6f6;
  border: none;
  border-radius: 6px;
  width: 90px;
  padding: 7px 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  &:hover {
    width: 90px;
    padding: 6px 14px;
    font-weight: 700;
    background-color: #fff;
    border: 2px solid #861dee;
    color: #861dee;
  }
  @media (max-width: 768px) {
    padding: 7px 14px;
    &:hover {
      padding: 5px 12px;
    }
  }
`;

const SelectButtonPupple = styled.button`
  box-sizing: content-box;
  background-color: #f6f6f6;
  border: none;
  border-radius: 6px;
  width: 90px;
  padding: 6px 14px;
  font-weight: 700;
  background-color: #fff;
  border: 2px solid #861dee;
  color: #861dee;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  @media (max-width: 768px) {
    padding: 7px 14px;
    &:hover {
      padding: 5px 12px;
    }
  }
`;

// eslint-disable-next-line
const CppSelectButton = ({ setIsColor,isColor}) => {
  const changeType = (type) => {
    setIsColor(type);
  };

  return (
    <Div>
      {isColor === true ? (
        <SelectButtonPupple>컬러</SelectButtonPupple>
      ) : (
        <SelectButton type="button" onClick={() => changeType(true)}>
          컬러
        </SelectButton>
      )}
      {/* 이미지 클릭하고 레이아웃 밖 클릭했을때도 계속해서 hover와 같은 처리 되도록 하기!  */}
      {isColor === false ? (
        <SelectButtonPupple>이미지</SelectButtonPupple>
      ) : (
        <SelectButton type="button" onClick={() => changeType(false)}>
          이미지
        </SelectButton>
      )}
    </Div>
  );
};

export default CppSelectButton;
