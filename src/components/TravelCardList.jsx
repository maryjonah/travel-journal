import React from "react";
import data from "../data";
import TravelCard from "./TravelCard";

export default function CardList() {
    const cards = data.map(item => {
        return (
          <TravelCard 
              key={item.id}
              item={item} 
          />
        )
    })
    return cards;
}
