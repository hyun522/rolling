import { useState } from 'react';
import {
  CardContiner,
  CardPaper,
  CardProfile,
  CardProfileSender,
  CardProfileRelationship,
  CardProfileTitle,
  CardProfileFrom,
  CardProfileName,
  CardProfileComment,
  CardProfileCreatedAt,
  CardProfileDeleted,
  CardProfileDeletedButton,
} from '../Header/MessageListPageCss';
import Deleted from '../../assets/images/deleted.png';
import Modal from '../../components/Modal';
import { MessageDeleteFetch } from '../../Api/api';

const fontFamily = {
  'Noto Sans': 'Noto Sans KR',
  Pretendard: 'Pretendard',
  나눔명조: 'Nanum Myeongjo',
  '나눔손글씨 손편지체': 'Handletter',
};

const CardList = ({ item, isEditMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    relationship,
    sender,
    profileImageURL,
    content,
    createdAt,
    font,
    id,
  } = item;

  const handleDelete = () => {
    MessageDeleteFetch(id);
  };

  const originalDateString = createdAt;
  const originalDate = new Date(originalDateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const newDateString = originalDate
    .toLocaleDateString('ko-KR', options)
    .replace(/\//g, '.');

  const handleModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <Modal modalDatas={item} setIsOpen={setIsOpen} />}
      <CardContiner onClick={handleModal}>
        <CardProfile>
          <CardPaper src={profileImageURL} alt="프로필이미지" />
          <CardProfileTitle>
            <CardProfileSender>
              <CardProfileFrom>From.</CardProfileFrom>
              <CardProfileName>{sender}</CardProfileName>
            </CardProfileSender>
            <CardProfileRelationship>{relationship}</CardProfileRelationship>
            {isEditMode && (
              <CardProfileDeletedButton onClick={handleDelete}>
                <CardProfileDeleted src={Deleted} alt="휴지통" />
              </CardProfileDeletedButton>
            )}
          </CardProfileTitle>
        </CardProfile>
        <CardProfileComment font={fontFamily[font]}>
          {content}
        </CardProfileComment>
        <CardProfileCreatedAt>{newDateString}</CardProfileCreatedAt>
      </CardContiner>
    </>
  );
};

export default CardList;
