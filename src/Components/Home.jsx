import React from 'react';
import HeaderPart from './HeaderPart';
import Info from './Info';
import ChooseUs from './ChooseUs';
import Finance from './Finance';
import Cash from './Cash';

function Home() {
  return (
    <>
      <HeaderPart />
      <Info />
      <ChooseUs />
      <Finance />
      <Cash />
    </>
  );
}

export default Home;
