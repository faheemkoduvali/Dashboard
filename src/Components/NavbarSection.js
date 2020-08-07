import React,{useState} from 'react'
import {Navbar,ToggleButton,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faCaretLeft, faCaretRight, faBars } from '@fortawesome/free-solid-svg-icons'

function NavbarSection() {
    const [count,setCount]=useState(0)
    const [prev,setPrev]=useState(["  Accounts","  Settings"," logOut"])
    const [icon,setIcon]=useState(faCaretRight)
    function handleClick()
    {
        console.log("clicked")
        var x = document.getElementById("menu-item-1").innerHTML
        var y = document.getElementById("menu-item-2").innerHTML
        var z = document.getElementById("menu-item-3").innerHTML
        setPrev([x,y,z])
        if (count == 0)
        {
            document.getElementById("menu-item-1").innerHTML=x + prev[0]
            document.getElementById("menu-item-2").innerHTML=y + prev[1]
            document.getElementById("menu-item-3").innerHTML=z + prev[2]
            setCount(1)
        }
        else
        {
            document.getElementById("menu-item-1").innerHTML=prev[0]
            document.getElementById("menu-item-2").innerHTML=prev[1]
            document.getElementById("menu-item-3").innerHTML=prev[2]
        }
            console.log(x)
        $("#wrapper").toggleClass("menuDisplayed");
        if (icon == faCaretRight)
            setIcon(faCaretLeft)
        else
            setIcon(faCaretRight)
    }
    return (
        <Navbar bg="light" expand="lg">
            <a onClick={handleClick}><FontAwesomeIcon icon={faBars} className="icon"/><FontAwesomeIcon icon={icon}/></a>
            
  
        </Navbar>
    )
}

export default NavbarSection
