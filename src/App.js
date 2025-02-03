import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>My Video Server</h1>
      <video width="320" height="240" controls>
        <source src="/videos/кинотеатр.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video width="320" height="240" controls>
        <source src="/videos/погода.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



    </div>
  );
}

export default App;


