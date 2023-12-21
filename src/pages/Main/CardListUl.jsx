import { MainUl, CardDeletedFlex } from '../Header/MessageListPageCss';
import CardList from './CardList';
import CardPlus from './CardPlus';
import DeleteButton from './DeleteButton';

const CardListUl = ({ isEditMode, onClick, id, messageData }) => {
  const { results } = messageData;

  return (
    <MainUl>
      {isEditMode && (
        <CardDeletedFlex>
          <DeleteButton onClick={onClick} />
        </CardDeletedFlex>
      )}

      <CardPlus id={id} />
      {results?.map((item) => {
        return <CardList key={item.id} item={item} isEditMode={isEditMode} />;
      })}
    </MainUl>
  );
};

export default CardListUl;
