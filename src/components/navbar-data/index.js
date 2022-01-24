import React from 'react';
import { typeOptions } from '../../data';

import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const NavbarData = [
  {
    title: typeOptions[0],
    path: '/men',
    icon: <FaIcons.FaMale/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Shirts',
        path: '/masculino/shirts',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: typeOptions[1],
    path: '/women',
    icon: <FaIcons.FaFemale />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Kids',
    path: '/kids',
    icon: <FaIcons.FaChild />,
    iconClosed: <FaIcons.FaCartPlus />,
  },
];