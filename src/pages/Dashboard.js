import React, { useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import ChartViewPage from './ChartViewPage';
import Header from '../components/Header';
import LoginPage from './LoginPage';



const Dashboard = ({showMenu, openSideBar, showMenuItems, changeSideBar, navigationList, footerNavigation}) => {

  return (<>
    <div style={{ display: "flex" }}>
      <SideBar showMenu={showMenu} openSideBar={openSideBar} showMenuItems={showMenuItems} changeSideBar={changeSideBar} navigationList={navigationList} footerNavigation={footerNavigation} />
      <div style={{ width: '100%' }}>
        <div style={{ background: "red" }}>
          <Header showMenuItems={showMenuItems} />
        </div>
        <Routes>
          <Route path="/" element={<ChartViewPage />} />
        </Routes>
      </div>
    </div>
  </>

  )
}

export default Dashboard