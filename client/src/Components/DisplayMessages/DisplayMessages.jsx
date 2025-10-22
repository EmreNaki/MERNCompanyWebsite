import React, { useState, useEffect } from 'react'
import { Footer } from '../Footer/Footer'
import axios from 'axios'

export const DisplayMessages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/messages")
                setMessages(res.data)
            } catch (err) {
                console.error("Failed to fetch messages", err)
            }
        }
        fetchMessages()
    }, [])

  return (
    <div>
        {messages.map((message) => (
        <div className='row' key={message._id}>
            <div className='col'>
               <h1>{message.mail}</h1>
              <h3 className='d-inline'>Gönderen: </h3>
              <h3 className='d-inline'>{message.name}</h3>
              <p>{message.text}</p>
            </div>
            <div className='col'>

            </div>
        </div>
))}
<Footer/>
    </div>
  )
}
