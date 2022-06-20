import React from "react";
import { SectionCard } from "./SectionCard.js";

export const HomeSection = (props) => {
  return <SectionCards sectionTitle={props.sectionTitle} cards={props.cards} />;
};
const SectionCards = (props) => {
  const cardList = props.cards; // array of obj {name: "mike", image: "url", attributes: [{label: "gender", value: "male"}]} - cardAttributes
  const sectionCardsList = cardList.map((card, index) => {
    return (
      <SectionCard
        cardType={props.sectionTitle}
        key={index}
        image={card.img}
        cardTitle={card.name}
        attributes={card.attributes}
      />
    );
  });
  return (
    <div className="container">
      <h1 className="text-warning p-5 ">{props.sectionTitle}</h1>
      <div className="scrollmenu">{sectionCardsList}</div>
    </div>
  );
};
