import React from 'react';
import sideBar from '../../data/data_'; // Adjust the path as necessary
import Sidebar from './SideBar';
function Layout() {
  return (
    <>
    <Sidebar items={sideBar} />
    </>
  );
}

export default Layout;
