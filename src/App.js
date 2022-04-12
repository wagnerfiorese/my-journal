import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
