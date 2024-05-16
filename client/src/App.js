import React from 'react';

// import JoinCallButton from './components/JoinCallButton';
// import CreateUser from './components/CreateUser';
import CreateCall from './components/CreateCall';
import { LoadingIndicator } from '@stream-io/video-react-sdk';



function App() {
  
  return (
    <div>
      <h1>Video Call App</h1>
      <CreateCall/>
    </div>
  );
}

export default App;
