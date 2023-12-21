import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import beigeSvg from '../assets/images/beige.svg';
import greenSvg from '../assets/images/green.svg';
import purpleSvg from '../assets/images/purple.svg';
import blueSvg from '../assets/images/blue.svg';
import TopReactions from './TopReactions';

const BackgroundColors = {
  green: '#D0F5C3',
  blue: '#B1E4FF',
  purple: '#ECD9FF',
  beige: '#FFE2AD',
};

const shakeX = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
`;

const StyledLink = styled(Link)`
  flex-shrink: 0;
  box-sizing: border-box;
  background-image: ${(props) =>
    props.item.backgroundImageURL
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${props.item.backgroundImageURL})`
      : null};
  background-color: ${(props) => BackgroundColors[props.item.backgroundColor]};
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 208px;
  height: 232px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 22px 20px 24px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 30px 20px 20px 20px;
  }

  &:hover {
    animation: ${shakeX} 0.5s ease-in-out infinite;
  }

  & .information {
    & .receiver {
      color: ${(props) => (props.item.backgroundImageURL ? '#FFF' : '#181818')};
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: -0.18px;
      text-overflow: ellipsis;
      @media (min-width: 768px) {
        font-family: Pretendard;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.24px;
      }
    }
    & .howManyWriters {
      color: ${(props) => (props.item.backgroundImageURL ? '#eee' : '#3a3a3a')};
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.07px;
      & strong {
        font-weight: 700;
      }
      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.16px;
      }
    }
  }

  & .information {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  & .emoji {
    padding-top: 16px;
    display: flex;
    gap: 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    z-index: 2;
    height: 49px;
    @media (min-width: 768px) {
      gap: 8px;
      height: 53px;
    }
  }

  & img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    @media (max-width: 768px) {
      right: -35px;
    }
  }

  @media (min-width: 768px) {
    width: 275px;
    height: 260px;
    padding: 30px 24px 20px 24px;
  }
`;

const CommenterImages = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 28px;

  & img {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50px;
    border: 1.5px solid #fff;
    background: #fff;
  }
  & .first {
    left: 0;
  }
  & .second {
    left: 16px;
  }
  & .third {
    left: 32px;
  }
  & .plusHowMany {
    position: absolute;
    display: flex;
    left: 48px;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 30px;
    color: #555;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.06px;
    padding: 5px 6px;
    z-index: 3;
  }
`;

const RollingPaperSummary = ({ item }) => {
  const DESTINATION = `/post/${item.id}`;
  return (
    <div className="slide">
      <StyledLink className="skeleton" item={item} to={DESTINATION}>
        {item.backgroundImageURL ? null : (
          <img
            src={(() => {
              switch (item.backgroundColor) {
                case 'blue':
                  return blueSvg;
                case 'green':
                  return greenSvg;
                case 'purple':
                  return purpleSvg;
                case 'beige':
                  return beigeSvg;
                default:
                  return '';
              }
            })()}
            alt="color pattern"
            className="pattern"
          />
        )}
        <div className="information">
          <p className="receiver">To. {item.name}</p>
          <CommenterImages>
            {item.recentMessages.length < 1 ? (
              <div />
            ) : (
              <img
                src={item.recentMessages[0].profileImageURL}
                alt="처음 롤링페이퍼를 작성한 사람의 프로필 사진"
                className="first"
              />
            )}
            {item.recentMessages.length < 2 ? (
              <div />
            ) : (
              <img
                src={item.recentMessages[1].profileImageURL}
                alt="두번째 롤링페이퍼를 작성한 사람의 프로필 사진"
                className="second"
              />
            )}
            {item.recentMessages.length < 3 ? (
              <div />
            ) : (
              <img
                src={item.recentMessages[2].profileImageURL}
                alt="세번째 롤링페이퍼를 작성한 사람의 프로필 사진"
                className="third"
              />
            )}
            {item.recentMessages.length < 4 ? (
              <div />
            ) : (
              <div className="plusHowMany">+{item.messageCount - 3}</div>
            )}
          </CommenterImages>
          <p className="howManyWriters">
            <strong>{item.recentMessages.length}</strong>명이 작성했어요!
          </p>
        </div>
        <div className="emoji">
          {item.topReactions.map((items) => {
            return <TopReactions key={items.id} item={items} />;
          })}
        </div>
      </StyledLink>
    </div>
  );
};

export default RollingPaperSummary;
