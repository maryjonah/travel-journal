import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/TravelCardList";

export default function App() {

  return (
    <div>
        <Navbar />
        <div className="container">
          <CardList />
        </div>

    </div>
  )
}
