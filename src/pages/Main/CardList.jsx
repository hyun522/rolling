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

const CardList = ({ item }) => {
  const { relationship, sender, profileImageURL, content, createdAt } = item;
  return (
    <CardContiner>
      <CardProfile>
        <CardPaper src={profileImageURL} alt="프로필이미지" />
        <CardProfileTitle>
          <CardProfileSender>
            <CardProfileFrom>From.</CardProfileFrom>
            <CardProfileName>{sender}</CardProfileName>
          </CardProfileSender>
          <CardProfileRelationship>{relationship}</CardProfileRelationship>
          <CardProfileDeletedButton>
            <CardProfileDeleted src={Deleted} alt="휴지통" />
          </CardProfileDeletedButton>
        </CardProfileTitle>
      </CardProfile>
      <CardProfileComment>{content}</CardProfileComment>
      <CardProfileCreatedAt>{createdAt}</CardProfileCreatedAt>
    </CardContiner>
  );
};

export default CardList;
