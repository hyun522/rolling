import { Link } from 'react-router-dom';
import { StyledContainer, StyledButton } from '../components/style';
import TextInputSection from '../components/TextInputSection';
import ProfileImgInputSection from '../components/ProfileImgInputSection';
import TextareaInputSection from '../components/TextareaInputSection';
import ToggleDownSection from '../components/ToggleDownSection';

const CreateMessagePage = () => {
  return (
    <div>
      <StyledContainer>
        <TextInputSection>From.</TextInputSection>
        <ProfileImgInputSection>프로필 이미지</ProfileImgInputSection>
        <ToggleDownSection optionType="relationship">
          상대와의 관계
        </ToggleDownSection>
        <TextareaInputSection>내용을 입력해 주세요</TextareaInputSection>
        <ToggleDownSection optionType="font" last>
          폰트 선택
        </ToggleDownSection>
      </StyledContainer>
      <Link to="/post/{id}">
        <StyledButton>생성하기</StyledButton>
      </Link>
    </div>
  );
};

export default CreateMessagePage;
