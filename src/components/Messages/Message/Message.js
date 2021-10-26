import React from 'react'
import { motion } from 'framer-motion'

import './Message.css'

import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
  const trimmedName = name.trim().toLowerCase()

  //const time = new Date().toLocaleTimeString().substr(0, 5)
  //   const hours = date.getHours()
  //   const minutes = date.getMinutes()
  //   const seconds = date.getSeconds()
  //   const time = hours + minutes + seconds
  //   console.log(date)

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
      <motion.div
        className="messageSendBox"
        // initial="hidden"
        // animate="visible"
        // variants={{
        //   hidden: {
        //     opacity: 0,
        //     scale: 0.5,
        //   },
        //   visible: {
        //     opacity: 1,
        //     scale: 1,
        //     transition: {
        //       type: 'spring',
        //       duration: 0.5,
        //     },
        //   },
        // }}
      >
        <p className="messageText ">{ReactEmoji.emojify(text)}</p>
      </motion.div>
      <p className="senderName">{trimmedName}</p>
      {/* <p className="receiverName">{time}</p> */}
    </div>
  ) : (
    <div className="messageReceive">
      <motion.div className="messageReceiveBox">
        <p className="messageText ">{ReactEmoji.emojify(text)}</p>
      </motion.div>
      <p className="receiverName">{user}</p>
      {/* <p className="receiverName">{time}</p> */}
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
