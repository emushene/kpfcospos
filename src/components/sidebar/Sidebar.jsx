import React from 'react'
import "./sidebar.css"
import {LineStyle} from "@material-ui/icons";
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';


const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className='sidebarTitle'>Dashboard</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            Home
          </li>
          <li className='sidebarListItems active' >
            <AnalyticsOutlinedIcon className='sidebarIcon'/>
            Analytics
          </li>
          <li className='sidebarListItems active'>
            <TimelineSharpIcon className='sidebarIcon'/>
            Sales
          </li>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            Reports
          </li>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            Orders
          </li>

        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className='sidebarTitle'>Operations Menu</h3>
        <ul className='sidebarList'>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            Super Investors
          </li>
          <li className='sidebarListItems active' >
            <AnalyticsOutlinedIcon className='sidebarIcon'/>
            Products
          </li>
          <li className='sidebarListItems active'>
            <TimelineSharpIcon className='sidebarIcon'/>
           Transactions
          </li>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            Reports
          </li>
          <li className='sidebarListItems active'>
            <LineStyle className='sidebarIcon'/>
            KPFC Operations
          </li>

        </ul>
      </div>










    </div> 
    </div>
  )
}

export default Sidebar
