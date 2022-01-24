import React from 'react';
import { Ul } from './styles';
import { NavbarData } from '../navbar-data';
import SubMenu from '../navbar-submenu';

const Navbar = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        {NavbarData.map((item, index) => {
          return <li key={index}><SubMenu item={item}/></li> 
        })}
      </Ul>
    </>
  );
};

export default Navbar;

// const Navbar = ({ open }) => {
//   return (
//     <>
//       <Ul open={open}>
//         <li>Masculino</li>
//         <li>Feminino</li>
//         <li>Infantil</li>
//         <li>Sign In</li>
//         <li>Sign Up</li>
//       </Ul>
//     </>
//   );
// };

// export default Navbar;
