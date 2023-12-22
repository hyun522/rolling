import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { StyledForm, StyledButton } from '../components/style';
import TextInputSection from '../components/TextInputSection';
import ProfileImgInputSection from '../components/ProfileImgInputSection';
import TextareaInputSection from '../components/TextareaInputSection';
import ToggleDownSection from '../components/ToggleDownSection';
import { createMessage } from '../Api/api';
import Header from '../components/Header';

const CreateMessagePage = () => {
  const [recipientId, setRecipientId] = useState('');
  const [sender, setSender] = useState('');
  const [profileImageURL, setProfileImageURL] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  );
  const [relationship, setRelationship] = useState('');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('');
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      team: '2-8',
      recipientId: id,
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    };

    await createMessage(messageData);
    navigate(`/post/${id}`);
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <TextInputSection sender={sender} setSender={setSender}>
          From.
        </TextInputSection>
        <ProfileImgInputSection
          profileImageURL={profileImageURL}
          setProfileImageURL={setProfileImageURL}
        >
          프로필 이미지
        </ProfileImgInputSection>
        <ToggleDownSection
          optionType="relationship"
          relationship={relationship}
          setRelationship={setRelationship}
        >
          상대와의 관계
        </ToggleDownSection>
        <TextareaInputSection content={content} setContent={setContent}>
          내용을 입력해 주세요
        </TextareaInputSection>
        <ToggleDownSection optionType="font" last font={font} setFont={setFont}>
          폰트 선택
        </ToggleDownSection>
        <StyledButton type="submit">생성하기</StyledButton>
      </StyledForm>
    </>
  );
};

export default CreateMessagePage;
