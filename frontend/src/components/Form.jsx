import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light py-4 shadow-md">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-2 pl-10 text-lg border border-gray-400 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 pl-10 text-lg border border-gray-400 rounded" />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full py-2 pl-10 text-lg border border-gray-400 rounded" />
      <button type="submit" className="bg-primary py-2 px-4 text-white rounded">Send</button>
    </form>
  )
}