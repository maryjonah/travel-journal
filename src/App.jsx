import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/TravelList";

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
