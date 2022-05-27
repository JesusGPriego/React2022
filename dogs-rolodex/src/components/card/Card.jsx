import './card.style.css';

const Card = ({ id, name }) => {
  return (
    <div className="card_container" key={id}>
      <img alt={`dog: ${name}`} src={`https://placedog.net/180/180?id=${id}`} />
      <h2>{name}</h2>
      <p>{'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}</p>
    </div>
  );
};

export default Card;
