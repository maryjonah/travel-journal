import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";

export default function App() {
  const cards = data.map(item => {
      return (
        <TravelCard 
            key={item.id}
            item={item} 
        />
      )
  })

  console.log(cards)

  return (
    <div>
        <Navbar />
        <div className="container">
          { cards }
        </div>
        
    </div>
  )
}
