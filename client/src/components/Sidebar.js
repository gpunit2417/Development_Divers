import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillHome, AiOutlinePlus, AiOutlineIssuesClose} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  function clickHandler() {
    //move to AddProject page
    navigate('/AddProject');
}
  return (
    <div>
      <div className="sidebar">
        <GiHamburgerMenu className='ham'/>
        <AiFillHome className='home'/>
        <AiOutlinePlus className='plus' onClick={clickHandler}/>
        <AiOutlineIssuesClose className='issues'/>
        <FiSettings className='settings'/>
      </div>
    </div>
  )
}

export default Sidebar
