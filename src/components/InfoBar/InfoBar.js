import React from 'react'
//import { Link } from 'react-router-dom'

import './InfoBar.css'

import Online from '../../icons/greenIcon1.svg'

const InfoBar = ({ room }) => {
  return (
    <div className="infoBarContainer">
      <div className="infoBarContent">
        <div className="IBleft">
          <img src={Online} alt="online" />
          <p className="IBTitle">{room}</p>
        </div>
        <div className="IBright">
          <a href="/">
            <button className="leaveBtn">LEAVE</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
