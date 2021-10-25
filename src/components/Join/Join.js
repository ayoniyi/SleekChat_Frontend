import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

import './Join.css'

import Logo from '../../icons/logo1.png'
//import Light from '../../icons/light.png'

const Join = () => {
  let history = useHistory()

  const [name, setName] = useState('')
  // Room represents conversations
  const [room, setRoom] = useState('')

  const handleJoin = (event) => {
    event.preventDefault()

    if (name && room) {
      localStorage.setItem('userName', name)
      localStorage.setItem('room', room)

      history.push('/chat')
    }
  }

  return (
    <div className="joinContainer">
      <div className="joinContent">
        <div className="joinLeft">
          <motion.img
            className="joinLogo"
            // initial="hidden"
            // animate="visible"
            // variants={{
            //   hidden: {
            //     //opacity: 0,
            //     filter: 'invert(90%)',
            //   },
            //   visible: {
            //     //opacity: 1,
            //     filter: 'invert(0%)',
            //     transition: {
            //       type: 'tween',
            //       repeat: Infinity,
            //       duration: 0.7,
            //     },
            //   },
            // }}
            src={Logo}
            alt="logo"
          />
          <div className="lText">
            <p className="logoText">fully encrypted and anonymous chats.</p>
          </div>
        </div>
        <div className="joinRight">
          <form className="joinForm" onSubmit={handleJoin}>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Alias (Name)"
                className="joinInput"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Conversation"
                className="joinInput"
                onChange={(e) => setRoom(e.target.value)}
                required
              />
            </div>

            <button className="joinButton" type="submit">
              GO SLEEK
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Join
