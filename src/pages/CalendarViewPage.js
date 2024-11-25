import React ,{useState} from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header';
import CalenderComponent from '../components/CalenderComponent';


const CalendarViewPage = ({showMenu, openSideBar, showMenuItems, changeSideBar, navigationList, footerNavigation}) => {
  return (
    <div style={{ display: "flex" }}>
    <SideBar showMenu={showMenu} openSideBar={openSideBar} showMenuItems={showMenuItems} changeSideBar={changeSideBar} navigationList={navigationList} footerNavigation={footerNavigation} />
    <div style={{ width: '100%' }}>
      <div style={{ background: "red" }}>
        <Header showMenuItems={showMenuItems} />
      </div>
      <div style={{width:"100%"}} >
        <CalenderComponent />
      </div>

    </div>
  </div>
  )
}

export default CalendarViewPage