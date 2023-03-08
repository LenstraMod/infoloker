import React, { useState } from 'react';

function Check() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  function handleNewMessage(event) {
    setNewMessage(event.target.value);
  }

  function handleSendMessage() {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chat Page</h1>
      <div className="border border-gray-400 rounded-lg p-4 mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="font-bold">User {index+1}</div>
            <div>{message}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input type="text" value={newMessage} onChange={handleNewMessage} className="flex-1 border border-gray-400 rounded-l-lg p-2" />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-r-lg p-2">Send</button>
      </div>
    </div>
  );
}

export default Check;
