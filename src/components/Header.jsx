import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../assets/images/HeaderLogo.svg';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.true {
    @media (max-width: 767px) {
      display: none;
    }
  }

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    width: 100%;

    @media (min-width: 768px) {
      padding: 11px 24px;
    }

    @media (min-width: 1248px) {
      padding: 11px 0px;
      max-width: 1207px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & button {
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #fff;
  }
  & p {
    color: #4a494f;
    text-align: center;
    font-family: Poppins;
    font-size: 19.971px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const StyledHr = styled.hr`
  height: 1px;
  background: #ededed;
  border: 0;
`;

const Header = ({ hidden }) => {
  return (
    <>
      <StyledDiv className={hidden}>
        <nav>
          <StyledLink to="/">
            <img src={HeaderLogo} alt="헤더의 로고" />
            <p>Rolling</p>
          </StyledLink>
          {hidden === 'true' ? (
            <div />
          ) : (
            <StyledLink to="/Post">
              <button type="button">롤링 페이퍼 만들기</button>
            </StyledLink>
          )}
        </nav>
      </StyledDiv>
      <StyledHr />
    </>
  );
};

export default Header;
