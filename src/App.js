import React, { useState } from "react";
import Speech from 'startsys-react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';

function App() {
  const [transcript, setTranscript] = useState("");
  
  const handleSpeech = (command) => {
    setTranscript(command);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Speech Recognition App</h1>
        <h3>Please click on the mic to begin the speech recognition demo.</h3>
        <div className="input-group">
          <Speech onSpeech={handleSpeech}>
            <FaMicrophone className="fas fa-2x" />
          </Speech>
          <input type="text" value={transcript} readOnly />
        </div>
      </header>
    </div>
  );
}

export default App;
