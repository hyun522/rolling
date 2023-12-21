import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledForm, StyledButton } from '../components/style';
import TextInputSection from '../components/TextInputSection';
import ProfileImgInputSection from '../components/ProfileImgInputSection';
import TextareaInputSection from '../components/TextareaInputSection';
import ToggleDownSection from '../components/ToggleDownSection';
import {
  fetchProfileImg,
  fetchRecipient,
  createMessage,
} from '../Api/messageApi';
import Header from '../components/Header';

const CreateMessagePage = () => {
  const [recipientId, setRecipientId] = useState('');
  const [sender, setSender] = useState(''); // 부모
  // 자식에게 필요한 것들을 부모에서 props로 전달
  const [profileImageURL, setProfileImageURL] = useState('');
  const [relationship, setRelationship] = useState('');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('');

  // console.log('sender', sender);
  // console.log('profileImageURL', profileImageURL);
  // console.log('relationship', relationship);
  // console.log('content', content);
  // console.log('font', font);

  const getRecipientId = async () => {
    const { results } = await fetchRecipient();
    console.log(results.id);
    setRecipientId(results.id);
  };

  useEffect(() => {
    getRecipientId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      team: '2-8',
      recipientId,
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    };
    // console.log('data', messageData);

    await createMessage(messageData);
    console.log(createMessage());
  };

  if (handleSubmit === '') {
    return <div>하이</div>;
  }
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
        <Link to={`/post/${recipientId}`}>
          <StyledButton type="submit">생성하기</StyledButton>
        </Link>
      </StyledForm>
    </>
  );
};

export default CreateMessagePage;
