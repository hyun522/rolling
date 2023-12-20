import { Toast, ToastCompleted } from './MessageListPageCss';
import Completed from '../../assets/images/completed.png';
import Close from '../../assets/images/close.png';

const URLToast = () => {
  return (
    <Toast>
      <ToastCompleted>
        <img src={Completed} alt="토스트체크" />
        URL이 복사 되었습니다.
      </ToastCompleted>
      <img src={Close} alt="닫는버튼" />
    </Toast>
  );
};

export default URLToast;
