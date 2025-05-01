import React, { useState, useEffect } from 'react';

const Messaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: 'janedoe', to: 'johnsmith', text: 'Hey, how are you?' },
    { id: 2, from: 'johnsmith', to: 'janedoe', text: 'I am good, thanks!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const message = {
      id: messages.length + 1,
      from: 'janedoe',
      to: 'johnsmith',
      text: newMessage,
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded ${
              msg.from === 'janedoe' ? 'bg-pink-100 self-end' : 'bg-gray-200 self-start'
            } max-w-xs`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messaging;
