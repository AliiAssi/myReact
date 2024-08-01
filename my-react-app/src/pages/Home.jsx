import React, { useState } from 'react';
import Card from '../components/Card/Card';

function Home() {
  const fruits  = ['banana', 'orange', 'strawberry', 'blueberry']
  return (
    <div className="mt-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {
          fruits.map((fruit, index) => (
            <Card key={index} title={fruit} imageSrc="https://placehold.co/600x400/orange/white" content={fruit + " is a fruit"} buttonText={"click the " + fruit }  />
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
