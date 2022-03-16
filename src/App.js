import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/Card";
import {CardList} from "./Data/CardList";
import Form from "./Component/Form";

export default function App() {
    const [cards, setCards] = useState(CardList);

    console.log(cards)

    return (
        <>
            <Form setCards={setCards}/>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                
                {cards.map(
                    card => (
                        <div style={{width: '70%', margin: 'auto', marginBottom: '10px'}}>
                            <Card id={card.id} title={card.title} content={card.content} cardObject={card} setCards={setCards}/>
                        </div>
                    )
                )}
            </div>
    </>
    )
}

