import React from 'react'
import "./topbar.css"
import { NotificationsNone } from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className='topbar'>

       <div className='topbarWrapper'>
        <div className='topLeft'> 
        <span className='logo'>KPFC Builders Hardware</span>
        </div>
        <div className='topRight'> 
            <div className="topbariconcONTAINER">
            <NotificationsNone />
            <span className='topIconBag'>2</span>
            </div>
        
        </div>

       </div>
      
    </div>
  )
}

export default Topbar
