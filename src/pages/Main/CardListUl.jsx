import { MainUl, CardDeletedFlex } from '../Header/MessageListPageCss';
import CardList from './CardList';
import CardPlus from './CardPlus';
import DeleteButton from './DeleteButton';

const CardListUl = ({ MockData }) => {
  const { recentMessages } = MockData;
  return (
    <MainUl>
      <CardDeletedFlex>
        <DeleteButton />
      </CardDeletedFlex>
      <CardPlus />
      {recentMessages.map((item) => {
        return <CardList key={item.id} item={item} />;
      })}
    </MainUl>
  );
};

export default CardListUl;
