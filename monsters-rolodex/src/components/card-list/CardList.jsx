import { Component } from 'react';
import Card from '../card/Card';
import './cardList.style.css';
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card_list">
        {monsters.map(monster => {
          const { id, name, email } = monster;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
