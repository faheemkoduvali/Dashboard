import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartPie, faColumns } from '@fortawesome/free-solid-svg-icons'

function Sidebar({active,setActive}) {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li><a href="#" id="menu-item-1" className={active[0]} onClick={()=> setActive(["active","",""])}><FontAwesomeIcon icon={faTachometerAlt} /></a></li>
                <li><a href="#" id="menu-item-2" className={active[1]} onClick={()=> setActive(["","active",""])}><FontAwesomeIcon icon={faChartPie} /></a></li>
                <li><a href="#" id="menu-item-3" className={active[2]} onClick={()=> {setActive(["","","active"])}}><FontAwesomeIcon icon={faColumns} /></a></li>
            </ul>
        </div>
    )
}

export default Sidebar
