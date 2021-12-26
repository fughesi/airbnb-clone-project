import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
// import Hero from "./components/Hero"
// <Hero />

export default function App() {

  console.log(data)
  const CardEl = data.map(info => 
    <Card 
      img={info.coverImg}
      rating={info.stats.rating}
      reviewCount={`(${info.stats.reviewCount})`}
      location={info.location}
      title={info.title}
      price={info.price}
      description={info.description}
    />
    )

  return (
    <>
    <div id="container">
      <Navbar />
      {CardEl}
    </div>
    </>
  );
}

 
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/