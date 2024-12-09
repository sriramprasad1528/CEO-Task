import { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhone } from 'react-icons/fa';

function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="relative aspect-video">
          {/* Main video display */}
          <div className="absolute inset-0 bg-black">
            <video className="w-full h-full object-cover" />
          </div>

          {/* Small self-view */}
          <div className="absolute bottom-4 right-4 w-48 aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <video className="w-full h-full object-cover" />
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-full ${
                isMuted ? 'bg-red-600' : 'bg-gray-700'
              } hover:bg-opacity-80`}
            >
              {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-4 rounded-full ${
                !isVideoOn ? 'bg-red-600' : 'bg-gray-700'
              } hover:bg-opacity-80`}
            >
              {isVideoOn ? <FaVideo /> : <FaVideoSlash />}
            </button>
            <button
              className="p-4 rounded-full bg-red-600 hover:bg-red-700"
            >
              <FaPhone className="transform rotate-135" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCall;