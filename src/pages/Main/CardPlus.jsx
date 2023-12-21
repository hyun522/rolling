import { Link } from 'react-router-dom';
import Create from '../../assets/images/plus.png';
import { CardCreateContiner, CreateButton } from '../Header/MessageListPageCss';

// a태그는 /post/{id}/message 여기로 이동할수 있도록.
// 1은 예시
const CardPlus = ({ id }) => {
  return (
    <CardCreateContiner>
      <Link to={`/post/${id}/message`} rel="noreferrer">
        <CreateButton>
          <img src={Create} alt="+버튼" />
        </CreateButton>
      </Link>
    </CardCreateContiner>
  );
};

export default CardPlus;
