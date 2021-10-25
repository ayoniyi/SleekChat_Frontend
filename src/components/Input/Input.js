import React from 'react'

import './Input.css'

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <div>
      <form className="chatInputForm">
        <input
          type="text"
          placeholder="Type a message..."
          className="chatInput"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
        />
        <button className="chatSubmit" onClick={(e) => sendMessage(e)}>
          SEND
        </button>
      </form>
    </div>
  )
}

export default Input
