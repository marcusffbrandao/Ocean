import React from 'react';
import { HeaderStyles, RightHeader, HeaderWave } from './styles';
import Burger from '../burger/index';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import { GiBigWave } from 'react-icons/gi';

const Header = () => {
  return (
    <HeaderStyles>
      {/* <div className="logo">SUNNY</div> */}
      <Link className="logo" to="/">
        <HeaderWave>
          <GiBigWave />
        </HeaderWave>
        OCEAN
      </Link>
      <Burger />
      <RightHeader>
        <div>
          <BsIcons.BsSearch />
        </div>
        <div>
          <BsIcons.BsCart3 />
        </div>
      </RightHeader>
    </HeaderStyles>
  );
};

export default Header;
