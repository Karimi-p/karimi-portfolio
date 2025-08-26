import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Preload critical images
const criticalImages = [
  '/images/bg.png',
  '/images/person.png',
  '/images/logo1.png',
  '/images/ideas.svg',
  '/images/concepts.svg',
  '/images/designs.svg',
  '/images/code.svg',
  '/images/menu.svg',
  '/images/x.svg'
];

        await Promise.all(
          criticalImages.map(src => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            });
          })
        );

        // Remove the minimum loading time for better UX
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading assets:', error);
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <StrictMode>
      {isLoading ? (
        <LoadingScreen onLoaded={handleLoadingComplete} />
      ) : (
        <App />
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
