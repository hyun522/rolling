import { styled } from 'styled-components';

const CreateButton = styled.button`
  background-color: #9935ff;
  display: block;
  width: 720px;
  padding: 14px 24px;
  margin: 0 auto;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;
  @media (max-width: 1200px) {
    margin-bottom: 24px;
  }
  @media (max-width: 768px) {
    width: 320px;
    padding: 14px 0px;
    margin-bottom: 24px;
  }
`;

const CppCreateButton = () => {
  return <CreateButton type="submit">생성하기</CreateButton>;
};

export default CppCreateButton;
