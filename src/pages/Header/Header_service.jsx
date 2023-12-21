import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReaction, getReactions } from '../../Api/api';
import ArrowAdd from '../../assets/images/add-24.png';
import ArrowDown from '../../assets/images/arrow_down.png';
import Share from '../../assets/images/share-24.png';
// import Data from '../../mock.json';
import {
  HeaderService,
  HeaderServiceBifurcationA,
  HeaderServiceBifurcationB,
  HeaderServiceEmoji,
  HeaderServiceEmojiAdd,
  HeaderServiceEmojiButton,
  HeaderServiceEmojiCount,
  HeaderServiceEmojiList,
  HeaderServiceEmojiPicker,
  HeaderServiceEmojiToggle,
  HeaderServiceImgC,
  HeaderServiceMans,
  HeaderServiceMedio,
  HeaderServiceMessageCount,
  HeaderServiceMessageCountText,
  HeaderServiceMessageDiv,
  HeaderServiceMoblieFlex,
  HeaderServiceName,
  HeaderServiceURLButton,
  HeaderServiceURLShareMenu,
  HeaderServiceURLShareMenuKaKao,
  HeaderServiceURLToggle,
  Testdiv,
} from './MessageListPageCss';
import URLToast from './URLSave';
// 파라미터에 Data넣어야함.
const HeaderUser = ({ data }) => {
  const { name, messageCount, recentMessages } = data;
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiList, setEmojiList] = useState([]);
  const [urlMenu, setUrlMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [urlShare, setUrlShare] = useState(false);

  const { id: userId } = useParams();

  const getReactionList = async (recipientId) => {
    try {
      const { results } = await getReactions(recipientId);
      setEmojiList(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const fristImg = recentMessages[0].profileImageURL;

  // const { profileImageURL: profileImageURL1 } = recentMessages[0];
  // const { profileImageURL: profileImageURL2 } = recentMessages[1];
  const handleShare = () => setUrlMenu(!urlMenu);

  const handleEmoji = () => setShowEmoji(!showEmoji);

  const handleEmojiAdd = () => setShowEmojiPicker(!showEmojiPicker);

  const handleEmojiClick = async (emojiData) => {
    const { emoji } = emojiData;

    try {
      await addReaction(userId, emoji);
      getReactionList(userId);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleURLShare = () => {
    setUrlShare(!urlShare);
  };

  useEffect(() => {
    setTimeout(() => {
      handleURLShare();
      setUrlShare(false); // 실행 후 상태 초기화
    }, 3000);
  }, [urlShare]);

  useEffect(() => {
    getReactionList(userId);
  }, [userId]);

  // ----------------------
  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceName>To.{name}</HeaderServiceName>
        {urlShare && <URLToast />}
        <HeaderServiceMedio>
          <HeaderServiceMoblieFlex>
            <HeaderServiceMans>
              {/* <HeaderServiceImgA src={profileImageURL1} alt="프로필이미지" />
              <HeaderServiceImgB src={profileImageURL2} alt="프로필이미지" /> */}
              {/* -3 해야함. */}
              <HeaderServiceImgC>
                {/* <p>+{recentMessages.length}</p> */}
              </HeaderServiceImgC>
              <HeaderServiceMessageDiv>
                <HeaderServiceMessageCount>
                  {/* {recentMessages.length} */}
                </HeaderServiceMessageCount>
                <HeaderServiceMessageCountText>
                  명이 작성했어요!
                </HeaderServiceMessageCountText>
              </HeaderServiceMessageDiv>
            </HeaderServiceMans>
            <HeaderServiceBifurcationA />
            <HeaderServiceEmojiList>
              {emojiList.map(({ id, emoji, count }, idx) =>
                idx < 3 ? (
                  <HeaderServiceEmoji key={id}>
                    {emoji}
                    <HeaderServiceEmojiCount>{count}</HeaderServiceEmojiCount>
                  </HeaderServiceEmoji>
                ) : (
                  false
                ),
              )}
              {showEmoji && (
                <HeaderServiceEmojiToggle>
                  {emojiList.map(({ id, emoji, count }) => (
                    <HeaderServiceEmoji key={id}>
                      {emoji}
                      <HeaderServiceEmojiCount>{count}</HeaderServiceEmojiCount>
                    </HeaderServiceEmoji>
                  ))}
                </HeaderServiceEmojiToggle>
              )}
            </HeaderServiceEmojiList>
            <HeaderServiceEmojiButton onClick={handleEmoji}>
              <img src={ArrowDown} alt="이모티콘배열" />
            </HeaderServiceEmojiButton>
            <HeaderServiceEmojiAdd onClick={handleEmojiAdd}>
              <img src={ArrowAdd} alt="이모티콘추가" />
              <p>추가</p>
              {showEmojiPicker && (
                <HeaderServiceEmojiPicker>
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </HeaderServiceEmojiPicker>
              )}
            </HeaderServiceEmojiAdd>

            <HeaderServiceBifurcationB />
            <HeaderServiceURLButton onClick={handleShare}>
              <img src={Share} alt="공유기능" />
              {urlMenu && (
                <HeaderServiceURLToggle>
                  <HeaderServiceURLShareMenuKaKao>
                    카카오톡 공유
                  </HeaderServiceURLShareMenuKaKao>

                  <HeaderServiceURLShareMenu onClick={handleURLShare}>
                    URL 공유
                  </HeaderServiceURLShareMenu>
                </HeaderServiceURLToggle>
              )}
            </HeaderServiceURLButton>
          </HeaderServiceMoblieFlex>
        </HeaderServiceMedio>
      </HeaderService>
    </Testdiv>
  );
};

export default HeaderUser;
