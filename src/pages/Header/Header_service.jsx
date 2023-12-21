import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addReaction, getReactions } from '../../Api/api';
import Icon from '../../assets/images/Icon.png';
import ArrowAdd from '../../assets/images/add-24.png';
import ArrowDown from '../../assets/images/arrow_down.png';
import Share from '../../assets/images/share-24.png';
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
  HeaderServiceImgA,
  HeaderServiceImgB,
  HeaderServiceImgC,
  HeaderServiceImgD,
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

const HeaderUser = ({ data }) => {
  const { name, messageCount, recentMessages } = data;
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiList, setEmojiList] = useState([]);
  const [urlMenu, setUrlMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [urlShare, setUrlShare] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const webUrl = `https://team8-rolling.netlify.app${pathname}`;
  const { id: userId } = useParams();

  const getReactionList = async (recipientId) => {
    try {
      const { results } = await getReactions(recipientId);
      setEmojiList(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const profileImageURL1 = recentMessages[0]?.profileImageURL;
  const profileImageURL2 = recentMessages[1]?.profileImageURL;
  const profileImageURL3 = recentMessages[2]?.profileImageURL;

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
    navigator.clipboard.writeText(webUrl).then(() => {
      setUrlShare(true);
    });
  };

  const handleShareKakaoClick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Rolling',
          description: '코드잇 스프린트 프로젝트입니다',
          imageUrl: Icon,
          link: {
            webUrl,
          },
        },
      });
    }
  };

  useEffect(() => {
    const KAKAO_KEY = '971f7771001245f764f53aed200f5a52';
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUrlShare(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [urlShare]);

  useEffect(() => {
    getReactionList(userId);
  }, [userId]);
  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceName>To.{name}</HeaderServiceName>
        {urlShare && <URLToast />}
        <HeaderServiceMedio>
          <HeaderServiceMoblieFlex>
            <HeaderServiceMans>
              {profileImageURL1 && (
                <HeaderServiceImgA src={profileImageURL1} alt="프로필이미지" />
              )}
              {profileImageURL2 && (
                <HeaderServiceImgB src={profileImageURL2} alt="프로필이미지" />
              )}
              {profileImageURL3 && (
                <HeaderServiceImgC src={profileImageURL3} alt="프로필이미지" />
              )}

              {messageCount > 3 ? (
                <HeaderServiceImgD>
                  <p>+{messageCount - 3}</p>
                </HeaderServiceImgD>
              ) : null}

              <HeaderServiceMessageDiv>
                <HeaderServiceMessageCount>
                  {messageCount}
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
                  <HeaderServiceURLShareMenuKaKao
                    onClick={handleShareKakaoClick}
                  >
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
