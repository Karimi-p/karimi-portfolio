import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Hold on, we present Karimi Waithaka...",
    "Crafting digital excellence...",
    "Loading your 3D experience...",
    "Almost there, preparing something amazing..."
  ];

  useEffect(() => {
    // Simulate loading progress
    const totalMessages = messages.length;
    const totalDuration = totalMessages * 2000; // Total time for all messages
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoaded(), 500);
          return 100;
        }
        return prev + (100 / (totalDuration / 30)); // Adjust progress based on total duration
      });
    }, 30);

    // Rotate messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [onLoaded, messages.length]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="creative-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="极速赛车开奖结果历史记录 spinner-core"></div>
        </div>
        
        <div className="loading-text">
          <h2 className="loading-message">{messages[currentMessage]}</h2>
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
