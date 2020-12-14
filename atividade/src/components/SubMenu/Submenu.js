import React from 'react';
import './Submenu.css';

function Submenu ({teste,teste2})  {
  console.info(teste);
  console.info(teste2);

   function open() {
        document.getElementById("sub-menu").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  
 function close(){
    document.getElementById("sub-menu").style.width = "0";
    document.body.style.backgroundColor = "#FFC502";
  } 
    
    return(
    <div className="menu">
    <div>
    <button className="menu-btn" onClick={open}/>
    </div>

    
    <div id='sub-menu' className='sub-menu'>
      <button  className="fechar" onClick={close}>X</button>
      <div>
      <button className="sub-menu-btn">Menu 1</button>
      </div>
      <div>
      <button className="sub-menu-btn">Menu 2</button>
      </div>
      <div>
      <button className="sub-menu-btn">Menu 3</button>
      </div>
      <div>
      <button className="sub-menu-btn">Menu 4</button>
      </div>
    </div>

    </div> 
    )
    
}

export default Submenu;