import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartPie, faColumns } from '@fortawesome/free-solid-svg-icons'

function Sidebar({active,setActive}) {
    return (
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li><a href="#" id="menu-item-1" class={active[0]} onClick={()=> setActive(["active","",""])}><FontAwesomeIcon icon={faTachometerAlt} /></a></li>
                <li><a href="#" id="menu-item-2" class={active[1]} onClick={()=> setActive(["","active",""])}><FontAwesomeIcon icon={faChartPie} /></a></li>
                <li><a href="#" id="menu-item-3" class={active[2]} onClick={()=> {setActive(["","","active"])}}><FontAwesomeIcon icon={faColumns} /></a></li>
            </ul>
        </div>
    )
}

export default Sidebar
