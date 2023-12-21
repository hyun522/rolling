import { styled } from 'styled-components';

// ------------- headerService 레이아웃

export const Testdiv = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1248px) {
    padding: 0px 24px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    z-index: 1;
    position: fixed;
    padding: 0px;
  }
`;

export const HeaderService = styled.div`
  height: 68px;
  position: relative;
  display: flex;
  align-items: center;
  width: 1207px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HeaderServiceMans = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderServiceName = styled.h1`
  color: var(--gray-800, #2b2b2b);
  width: 490px;

  /* Font/28 Bold */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 150% */
  letter-spacing: -0.28px;
  @media screen and (max-width: 1248px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    padding: 12px 20px;
    align-items: center;
    border-bottom: 1px solid #ededed;
  }
`;

export const HeaderServiceMedio = styled.div`
  @media screen and (max-width: 767px) {
    padding: 8px 20px;
    background-color: white;
    width: 100%;
  }
`;

export const HeaderServiceImgA = styled.img`
  position: absolute;
  left: -50px;
  border-radius: 140px;
  border: 1.4px solid #fff;
  width: 28px;
  height: 28px;
`;
export const HeaderServiceImgB = styled.img`
  position: absolute;
  left: -36px;
  border-radius: 140px;
  border: 1.4px solid #fff;
  width: 28px;
  height: 28px;
`;
export const HeaderServiceImgC = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  left: -22px;
  border-radius: 140px;
  border: 1.4px solid #fff;
  width: 28px;
  height: 28px;
  color: #484848;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  background-color: white;
`;
export const HeaderServiceMessageDiv = styled.div`
  margin-left: 11px;
  display: flex;
  @media screen and (max-width: 1248px) {
    width: 140px;
  }
`;

export const HeaderServiceMessageCount = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; /* 150% */
`;

export const HeaderServiceMessageCountText = styled.p`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

export const HeaderServiceBifurcationA = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: auto 28px;
  @media screen and (max-width: 1248px) {
    margin: auto 14px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderServiceEmoji = styled.div`
  gap: 4px;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
  align-items: center;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  @media screen and (max-width: 767px) {
    padding: 4px 8px;
  }
`;

export const HeaderServiceEmojiCount = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const HeaderServiceEmojiList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderServiceEmojiButton = styled.button`
  position: relative;
  display: flex;
  width: 36px;
  height: 36px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const HeaderServiceEmojiToggle = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 8px;
  top: 45px;
  left: -50px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  position: absolute;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 16px;
    left: 1px;
  }
`;

export const HeaderServiceEmojiAdd = styled.div`
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  display: flex;
  position: relative;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  margin-left: 8px;
  @media screen and (max-width: 1248px) {
    width: 80px;
    padding: 6px 8px;
  }
  @media screen and (max-width: 767px) {
    p {
      display: none;
    }
    width: auto;
    margin-left: 2px;
  }
`;

export const HeaderServiceBifurcationB = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: auto 13px;
`;

export const HeaderServiceURLButton = styled.button`
  position: relative;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1248px) {
    padding: 6px 8px;
  }
`;

export const HeaderServiceURLToggle = styled.div`
  position: absolute;
  top: 45px;
  right: 5px;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  display: inline-flex;
  padding: 10px 1px;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderServiceURLShareMenuKaKao = styled.div`
  display: flex;
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
`;

export const HeaderServiceURLShareMenu = styled.div`
  display: flex;
  width: 138px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  background: var(--gray-100, #f6f6f6);
`;

// --------------- CardList ------ //

export const CardContiner = styled.li`
  width: 384px;
  height: 280px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    background-color: rgba(243, 243, 243);
  }
  @media screen and (max-width: 1248px) {
    width: 100%;
  }
`;

// 카드 추가 컨테이너
export const CardCreateContiner = styled.li`
  display: flex;
  width: 384px;
  height: 280px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 1248px) {
    width: 100%;
  }
`;

export const CreateButton = styled.button`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--gray-500, #555);
`;

export const MainUl = styled.ul`
  padding: 113px 0px;
  position: relative;
  margin: 0px auto;
  width: 1200px;
  justify-content: center;
  gap: 24px;
  grid-template-columns: 384px 384px 384px;
  display: grid;
  list-style: none;
  @media screen and (max-width: 1248px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 113px 24px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 160px 24px 38px;
  }
`;

// ----------- 카드리스트

export const CardPaper = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

export const CardProfile = styled.div`
  position: relative;
  border-bottom: 1px solid var(--gray-200, #eee);
  display: flex;
  width: 384px;
  padding: 28px 24px 15px 24px;
  align-items: flex-start;
  gap: 15px;
  @media screen and (max-width: 1248px) {
    width: 100%;
  }
`;

export const CardProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const CardProfileSender = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

export const CardProfileRelationship = styled.div`
  color: var(--green-500, #2ba600);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.07px;
  padding: 0px 8px;
  border-radius: 4px;
  background: var(--green-100, #e4fbdc);
`;

export const CardProfileFrom = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;

export const CardProfileName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
`;

export const CardProfileComment = styled.div`
  padding: 16px 24px 16px;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
  width: 336px;
  height: 106px;
  flex-shrink: 0;
  @media screen and (max-width: 1248px) {
    width: auto;
  }
`;

export const CardProfileCreatedAt = styled.p`
  margin: 0px 0px 24px 24px;
  color: var(--gray-400, #999);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;

// 쓰레기통 버튼들

export const CardProfileDeleted = styled.img`
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const CardProfileDeletedButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 24px;
`;
// 여기까지 쓰레기통

// 삭제버튼
export const CardDeleted = styled.button`
  right: 360px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  width: 92px;
  height: 39px;
  border-radius: 6px;
  background: #9935ff;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const CardDeletedFlex = styled.div`
  top: 65px;
  justify-content: flex-end;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 1248px) {
    padding: 0px 24px;
  }
  @media screen and (max-width: 1024px) {
    position: fixed;
    top: auto;
    bottom: 24px;
  }
`;

// URL눌렸을때 나오는 문구

export const Toast = styled.div`
  width: 524px;
  z-index: 3;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 70px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  height: 64px;
  padding: 19px 30px;
  justify-content: center;
  align-items: flex-start;
  gap: 253px;
  @media screen and (max-width: 768px) {
    width: 320px;
    gap: 49px;
  }
`;

export const ToastText = styled.p`
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;

export const ToastCompleted = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

// EmojiPicker라이브러리
// 미디어쿼리 일단 임시방편으로 이렇게 처리함.
export const HeaderServiceEmojiPicker = styled.div`
  right: 1px;
  top: 50px;
  z-index: 2;
  position: absolute;
  @media screen and (max-width: 768px) {
    right: 230px;
    width: 100%;
  }
`;

export const HeaderServiceMoblieFlex = styled.div`
  display: flex;
`;
