import styled from 'styled-components';

const EmojiBoxes = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;

const TopReactions = ({ item }) => {
  return <EmojiBoxes>{`${item.emoji}${item.count}`}</EmojiBoxes>;
};

export default TopReactions;
