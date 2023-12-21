import { CardDeleted } from '../Header/MessageListPageCss';

const DeleteButton = ({ onClick }) => {
  return <CardDeleted onClick={onClick}>삭제하기</CardDeleted>;
};

export default DeleteButton;
