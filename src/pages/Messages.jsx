import { useState } from 'react';
import { FaPaperPlane, FaVideo, FaPhone } from 'react-icons/fa';

function Messages() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState('');

  const contacts = [
    { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { id: 2, name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { id: 3, name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' }
  ];

  const messages = [
    { id: 1, senderId: 1, text: 'Hey, how are you?', timestamp: '10:30 AM' },
    { id: 2, senderId: 'me', text: 'Im good, thanks! How about you?', timestamp: '10:31 AM' },
    { id: 3, senderId: 1, text: 'Great! Would you like to collaborate on a project?', timestamp: '10:32 AM' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add message sending logic here
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex h-[calc(100vh-12rem)] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Contacts List */}
        <div className="w-1/4 border-r">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="space-y-4">
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`flex items-center p-3 cursor-pointer rounded-lg hover:bg-gray-100 
                    ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                >
                  <img
                    src={`${contact.avatar}?auto=format&fit=crop&w=32&h=32&q=80`}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="ml-3">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={`${selectedContact.avatar}?auto=format&fit=crop&w=32&h=32&q=80`}
                    alt={selectedContact.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="ml-3 font-semibold">{selectedContact.name}</span>
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-blue-600">
                    <FaPhone />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600">
                    <FaVideo />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.senderId === 'me'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-xs opacity-75">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a contact to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;