import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import Hero from "./components/Hero"

export default function App() {


  const CardEl = data.map(info => 
    <Card 
    key={info.id}
    info={info}
    />)
    
    return (
      <>
    <div id="container">
      <Navbar />
      <Hero />
      <section id="carousel">
        {CardEl}
      </section>
    </div>
    </>
  );
}

 
