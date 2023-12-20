import styled from 'styled-components';

const fontFamily = {
  'Noto Sans': 'Noto Sans KR',
  Pretendard: 'Pretendard',
  나눔명조: 'Nanum Myeongjo',
  '나눔손글씨 손편지체': 'Handletter',
};

const Modal = ({ modalDatas, setIsOpen }) => {
  const {
    sender,
    profileImageURL,
    relationship,
    content,
    font = 'Noto Sans',
    createdAt,
  } = modalDatas;

  const handleIsOpen = () => setIsOpen(false);

  return (
    <Wrapper>
      <Container>
        <ModalHeader>
          <WriterArea>
            <ProfileImage src={profileImageURL} alt="profile" />
            <div>
              <Writer>
                From. <span>{sender}</span>
              </Writer>
              <RelationShip>{relationship}</RelationShip>
            </div>
          </WriterArea>
          <Date>{createdAt}</Date>
        </ModalHeader>
        <hr />
        <ModalContents font={fontFamily[font]}>{content}</ModalContents>
        <ModalButton onClick={handleIsOpen}>확인</ModalButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const Container = styled.div`
  width: 600px;
  height: 476px;
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;

  & hr {
    margin-top: 20px;
    margin-bottom: 16px;
    border: 1px solid #eee;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriterArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const Writer = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  & span {
    font-weight: 700;
  }
`;

const RelationShip = styled.div`
  width: fit-content;
  padding: 0 8px;
  background-color: #f8f0ff;
  color: #9935ff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const Date = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const ModalContents = styled.div`
  width: 520px;
  height: 240px;
  color: #5a5a5a;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;
  overflow-y: auto;
  scrollbar-width: 4px;
  font-family: ${(font) => `${font}, sans-serif`};

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    background-clip: padding-box;
    border-left: 16px solid transparent;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ModalButton = styled.button`
  display: block;
  width: 120px;
  padding: 7px 16px;
  border-radius: 6px;
  background-color: #9935ff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  border: none;
  margin: 0 auto;
  margin-top: 24px;
`;

export default Modal;
