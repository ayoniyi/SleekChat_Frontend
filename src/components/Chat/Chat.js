import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import io from 'socket.io-client'
//import { isMobile } from 'react-device-detect'

import InfoBar from '../InfoBar/InfoBar'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import TextContainer from '../TextContainer/TextContainer'

import './Chat.css'

let socket

const Chat = () => {
  let history = useHistory()

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  //const [load, SetLoad] = useState('loaded')
  const ENDPOINT = 'https://sleekchat-server.herokuapp.com/'
  //const ENDPOINT = 'http://localhost:5000/'

  // useEffect(() => {
  //   refresh()
  // }, [load])

  //const refresh = () => {
  // setTimeout(() => {
  //   window.location.reload()
  // }, 200)
  // if (!window.location.hash) {
  //   window.location = window.location + '#loaded'
  //   //window.location.reload()
  // }
  //window.onload = function () {
  // if (!window.location.hash) {
  //   window.location = window.location + '#loaded'
  //   window.location.reload()
  // }
  //}
  //}

  // if (isMobile) {
  //   document.addEventListener('visibilitychange', function () {
  //     //document.title = document.hidden ? "I'm away" : "I'm here";
  //     window.location.reload()
  //   })
  // }
  if (window.screen.width <= 800) {
    /* conditional statements */
    document.addEventListener('visibilitychange', function () {
      //document.title = document.hidden ? "I'm away" : "I'm here";
      //window.location.reload()
      if (document.hidden) {
        //do whatever you want
        console.log('Hidden')
      } else {
        //do whatever you want
        console.log('SHOWN')
        window.location.reload()
      }
    })
  }

  useEffect(() => {
    return () => {
      if (history.action === 'POP') {
        history.go(1)
      }
    }
  }, [history])

  useEffect(() => {
    const name = localStorage.getItem('userName')
    const room = localStorage.getItem('room')

    if (!name || !room) {
      history.push('/')
    } else {
      socket = io(ENDPOINT, { transports: ['websocket'] })

      setName(name)
      setRoom(room)

      socket.emit('join', { name, room }, () => {})
      console.log(socket)

      //return () => {
      //refresh()
      // socket.emit('disconnect')
      // socket.off()

      //history.push('/')
      //}
    }

    //refresh()
  }, [ENDPOINT, history])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <div className="chatBox">
      <div className="chatContainer">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default Chat
