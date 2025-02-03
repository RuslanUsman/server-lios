import React, { useState, useEffect } from 'react';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById('video');
      if (videoElement && videoElement.getBoundingClientRect().top < window.innerHeight) {
        setVideoLoaded(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <h1>My Video Server</h1>
      {videoLoaded && (
        <video id="video" width="320" height="240" controls>
          <source src="/videos/кинотеатр.mp4" type="video/mp4" />
          <source src="/videos/погода.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default App;



