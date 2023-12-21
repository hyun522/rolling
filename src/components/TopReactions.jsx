import styled from 'styled-components';

const EmojiBoxes = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

const TopReactions = ({ item }) => {
  return <EmojiBoxes>{`${item.emoji} ${item.count}`}</EmojiBoxes>;
};

export default TopReactions;
