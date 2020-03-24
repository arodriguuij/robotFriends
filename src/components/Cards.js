import React from 'react';
import Card from './Card';

const Cards = ({ robots }) => {
    const cardsArray = robots.map((e, i) =>
        <Card key={i} id={e.id} name={e.name} email={e.email} />);
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default Cards;