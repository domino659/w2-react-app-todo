import React, {useState} from "react";
import {CardList} from "../Data/CardList";
import {Form} from "./Form"

export default function Card({id, title, content, setCards, cardObject}) {

    console.log(cardObject);


    const handleDelete = (id) => {
        setCards(cards => (cards.filter(card => (card.id !== cardObject.id))))
    }

    return (
        id ? (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5>{id}</h5>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
        ):null
    )
}
