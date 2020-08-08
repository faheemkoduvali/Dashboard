import React,{useState,useCallback} from 'react';

import Dashboard from './Components/Dashboard';
import Charts from './Components/Charts';
import Tables from './Components/Tables';
import NavbarSection from './Components/NavbarSection';
import Sidebar from './Components/Sidebar';
import ContentPage from './Components/ContentPage';
import $ from "jquery"

function App() {
  const pages= [<Dashboard />,<Charts/>,<Tables />]
  const [active,setActive] = useState(["active","",""])
  const activeHandler=useCallback(
    (n)=> {
      setActive(n)
      if (n[2]=="active") {
        document.getElementById("wrapper").style.position = "unset";
      }
      else
      { 
        console.log("relative");
        var element = document.getElementById("wrapper");
        element.style.cssText = 'position:relative !important';
      }
    },
    [active]
  );
  console.log(pages[active.indexOf('active')])
  return (
    <div>
      <NavbarSection/>
      <div id ="wrapper">
        <Sidebar active={active} setActive={activeHandler}/>
        <ContentPage pages={pages[active.indexOf('active')]}/>
      </div>
    </div>
  );
}

export default App;
