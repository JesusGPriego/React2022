import Card from './../card/Card';
import './cardList.style.css';

const CardList = ({ listElements, searchValue }) => {
  const filteredElements = listElements.filter(element => {
    return element.name.toLowerCase().includes(searchValue);
  });

  return (
    <div className="card_list">
      {filteredElements.map(dog => {
        const { id, name } = dog;
        return <Card key={id} id={id} name={name} />;
      })}
    </div>
  );
};

export default CardList;
