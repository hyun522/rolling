import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

import Emoji from '../assets/images/home-emoji.png';
import Rolling from '../assets/images/home-rolling.png';

const HomePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <FirstBanner>
            <div>
              <Point>Point. 01</Point>
              <Title>
                누구나 손쉽게, 온라인
                <LineBreak />
                롤링 페이퍼를 만들 수 있어요
              </Title>
              <Description>로그인 없이 자유롭게 만들어요.</Description>
            </div>
            <ImageScroller>
              <RollingImage src={Rolling} />
            </ImageScroller>
          </FirstBanner>
          <SecondBanner>
            <EmojiImage src={Emoji} />
            <div>
              <Point>Point. 02</Point>
              <Title>
                서로에게 이모지로 감정을
                <LineBreak />
                표현해보세요
              </Title>
              <Description>
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </Description>
            </div>
          </SecondBanner>
          <LinkButton to="/list">구경해보기</LinkButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default HomePage;

const Wrapper = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
`;

const Banner = styled.div`
  width: 100%;
  height: 324px;
  display: flex;
  align-items: flex-start;
  padding: 60px;
  background-color: #f6f8ff;
  border-radius: 16px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    gap: 36px;
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

const FirstBanner = styled(Banner)`
  justify-content: space-between;
`;

const SecondBanner = styled(Banner)`
  justify-content: space-around;
`;

const LinkButton = styled(Link)`
  display: block;
  text-align: center;
  width: 280px;
  padding: 14px 24px;
  background-color: #9935ff;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;
  border: none;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 150px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

const ImageScroller = styled.div`
  width: 640px;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RollingImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 354px;
  }
`;

const EmojiImage = styled.img`
  width: 470px;
  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    order: 1;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Point = styled.div`
  width: fit-content;
  height: 32px;
  padding: 6px 12px;
  color: white;
  border-radius: 50px;
  background-color: #9935ff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    padding: 4px 12px;
    height: 28px;
  }
`;

const Title = styled.div`
  color: #181818;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 4px;
    letter-spacing: -0.18px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  color: #555;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.15px;
  }
`;

const LineBreak = styled.br`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
