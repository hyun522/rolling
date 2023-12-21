import { useNavigate } from 'react-router-dom';
import { CardDeleted } from '../Header/MessageListPageCss';
import { QuestionDeleteFetch } from '../../Api/api';

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await QuestionDeleteFetch(id);
    navigate('/list');
  };
  return <CardDeleted onClick={handleDelete}>삭제하기</CardDeleted>;
};

export default DeleteButton;
