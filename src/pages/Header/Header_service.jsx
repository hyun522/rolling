import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../assets/images/Icon.png';
import ArrowAdd from '../../assets/images/add-24.png';
import ArrowDown from '../../assets/images/arrow_down.png';
import Share from '../../assets/images/share-24.png';
import Data from '../../mock.json';
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
  HeaderServiceMans,
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

const HeaderUser = () => {
  const [emoji, setEmoji] = useState(false);
  const [urlMenu, setUrlMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [urlShare, setUrlShare] = useState(false);
  // 목데이터들인데 api주소 받으면 변경해서 작성.
  const { results } = Data;
  const [{ recentMessages }] = results;

  const location = useLocation();
  const { pathname } = location;
  const webUrl = `http://localhost:3000${pathname}`;

  const { profileImageURL: profileImageURL1 } = recentMessages[0];
  const { profileImageURL: profileImageURL2 } = recentMessages[1];
  const handleShare = () => setUrlMenu(!urlMenu);

  const handleEmoji = () => setEmoji(!emoji);

  const handleEmojiAdd = () => setShowEmojiPicker(!showEmojiPicker);

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
    const timer = setTimeout(() => {
      setUrlShare(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [urlShare]);

  useEffect(() => {
    const KAKAO_KEY = '971f7771001245f764f53aed200f5a52';
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
  }, []);

  // ----------------------
  // 3. boder bottom or boder top 둘중하나 작업.
  // 의미없는 A,B 보더박스인척하는 div 없애고 보더만들기.
  return (
    <Testdiv>
      <HeaderService>
        <HeaderServiceName>To.{results[0].name}</HeaderServiceName>
        {urlShare && <URLToast />}
        <HeaderServiceMoblieFlex>
          <HeaderServiceMans>
            <HeaderServiceImgA src={profileImageURL1} alt="프로필이미지" />
            <HeaderServiceImgB src={profileImageURL2} alt="프로필이미지" />
            {/* -3 해야함. */}
            <HeaderServiceImgC>
              <p>+{recentMessages.length}</p>
            </HeaderServiceImgC>
            <HeaderServiceMessageDiv>
              <HeaderServiceMessageCount>
                {recentMessages.length}
              </HeaderServiceMessageCount>
              <HeaderServiceMessageCountText>
                명이 작성했어요!
              </HeaderServiceMessageCountText>
            </HeaderServiceMessageDiv>
          </HeaderServiceMans>
          <HeaderServiceBifurcationA />
          <HeaderServiceEmojiList>
            <HeaderServiceEmoji>
              👍<HeaderServiceEmojiCount>24</HeaderServiceEmojiCount>
            </HeaderServiceEmoji>
            <HeaderServiceEmoji>
              😍<HeaderServiceEmojiCount>16</HeaderServiceEmojiCount>
            </HeaderServiceEmoji>
            <HeaderServiceEmoji>
              🎉<HeaderServiceEmojiCount>10</HeaderServiceEmojiCount>
            </HeaderServiceEmoji>
            {emoji && (
              <HeaderServiceEmojiToggle>
                <HeaderServiceEmoji>
                  😍<HeaderServiceEmojiCount>16</HeaderServiceEmojiCount>
                </HeaderServiceEmoji>
                <HeaderServiceEmoji>
                  😍<HeaderServiceEmojiCount>100</HeaderServiceEmojiCount>
                </HeaderServiceEmoji>
                <HeaderServiceEmoji>😍</HeaderServiceEmoji>
                <HeaderServiceEmoji>😍</HeaderServiceEmoji>
                <HeaderServiceEmoji>😍</HeaderServiceEmoji>
                <HeaderServiceEmoji />
                <HeaderServiceEmoji />
                <HeaderServiceEmoji />
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
                <EmojiPicker />
              </HeaderServiceEmojiPicker>
            )}
          </HeaderServiceEmojiAdd>

          <HeaderServiceBifurcationB />
          <HeaderServiceURLButton onClick={handleShare}>
            <img src={Share} alt="공유기능" />
            {urlMenu && (
              <HeaderServiceURLToggle>
                <HeaderServiceURLShareMenuKaKao onClick={handleShareKakaoClick}>
                  카카오톡 공유
                </HeaderServiceURLShareMenuKaKao>

                <HeaderServiceURLShareMenu onClick={handleURLShare}>
                  URL 공유
                </HeaderServiceURLShareMenu>
              </HeaderServiceURLToggle>
            )}
          </HeaderServiceURLButton>
        </HeaderServiceMoblieFlex>
      </HeaderService>
    </Testdiv>
  );
};

export default HeaderUser;
