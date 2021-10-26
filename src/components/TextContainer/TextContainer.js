import React from 'react'

import logo from '../../icons/logo2.png'
import onlineIcon from '../../icons/greenIcon2.svg'

import './TextContainer.css'

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="textContent">
      <div className="sideLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="userBox">
        {users ? (
          <div>
            <h1>In this conversation:</h1>
            <div className="activeUsers">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeUser">
                    <p className="activeName">{name}</p>
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
                <div className="active-m">
                  <p className="activeName">{users.length}</p>
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
)

export default TextContainer
