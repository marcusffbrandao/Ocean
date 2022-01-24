import React, { useState } from 'react';
import { BurgerStyles } from './styles';
import Navbar from '../navbar/index';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerStyles open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyles>
      <Navbar open={open}/>
    </>
  );
};

export default Burger;
