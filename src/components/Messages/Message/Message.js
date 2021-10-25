import React from 'react'

import './Message.css'

import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase()

  let isSentByCurrentUser = false
  //   let isAdmin = false

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  //   const [isSentByCurrentUser, setIsSentByCurrentUser] = useState('false')
  //   const [isAdmin, setIsAdmin] = useState('false')

  //   useEffect(() => {
  //     if (user === trimmedName) {
  //       setIsSentByCurrentUser(true)
  //     }
  //     if (user === 'admin') {
  //       setIsAdmin(true)
  //     }
  //   }, [isSentByCurrentUser, isAdmin, trimmedName, user])

  return isSentByCurrentUser ? (
    <div className="messageSend">
      <div className="messageSendBox ">
        <p className="messageText ">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="senderName">{trimmedName}</p>
    </div>
  ) : (
    <div className="messageReceive">
      <div className="messageReceiveBox">
        <p className="messageText ">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="receiverName">{user}</p>
    </div>
  )
}

//   return (
//     <>
//       {isSentByCurrentUser && !isAdmin && (
//         <div className="messageSend">
//           <div className="messageSendBox ">
//             <p className="messageText ">{ReactEmoji.emojify(text)}</p>
//           </div>
//           <p className="senderName">{trimmedName}</p>
//         </div>
//       )}
//       {!isSentByCurrentUser && !isAdmin && (
//         <div className="messageReceive">
//           <div className="messageReceiveBox">
//             <p className="messageText ">{ReactEmoji.emojify(text)}</p>
//           </div>
//           <p className="receiverName">{user}</p>
//         </div>
//       )}
//       {isAdmin && !isSentByCurrentUser && (
//         <div className="messageReceive">
//           <div className="adminBox">
//             <p className="messageText ">{ReactEmoji.emojify(text)}</p>
//           </div>
//           <p className="receiverName">{user}</p>
//         </div>
//       )}
//     </>
//   )
// }

export default Message
