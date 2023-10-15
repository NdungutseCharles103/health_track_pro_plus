/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaUserCircle } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';

export const sideBarLinks = [
  {
    name: 'Dashboard',
    icon: <LuLayoutDashboard className=" mr-3" />,
    link: '/' as any,
  },
  {
    name: 'Account',
    icon: <FaUserCircle className=" mr-3" />,
    link: '/account' as any,
  },
];
