import React, { useState } from 'react';
import axios from 'axios';
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  CallControls,
  SpeakerLayout,
  StreamTheme,
  role,
  CallType,
  User,
} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';

const CreateCallButton = () => {
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [callId, setCallId] = useState('');
  const [callType, setCallType] = useState('');
  const [call, setCall] = useState(null);
  const [client, setClient] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const data = {
    "creatorId": "testcall",
    "role": "admin",
    "name": "Himosh",
    "callId": "my-first-call",
    "callType": "default",
    "members": [
      {
        "id": "test1",
        "name": "John Doe",
        "role": "user"
      },
      {
        "id": "test2",
        "name": "Jane Smith",
        "role": "user"
      },
      {
        "id": "test3",
        "name": "Alice Johnson",
        "role": "user"
      }
    ]
  }

  const createUserCreator = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-user', {
        userId: data.creatorId,
        role: data.role,
        name: data.name,
      });
      const { userId, token } = response.data;
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      setErrorMessage('');
      return { userId, token };
    } catch (error) {
      setErrorMessage('Error creating user');
      console.error('Error creating user:', error);
    }
  };
  
  // const createCall = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/create-call', data);
  //     const { callId, callType } = response.data;
  //     console.log('Call created successfully:', { callId, callType });
  //     // setCallId(callId);
  //     // setCallType(callType);
  //     // setErrorMessage('');
  //   } catch (error) {
  //     setErrorMessage('Error creating call');
  //     console.error('Error creating call:', error);
  //   }
  // };

  
  const joinCall = async (userId, token) => {
    try {
      const apiKey = 'zqzcsd5wgg5q';
      const user = { id: String(userId) };
      const callType = data.callType;
      const callId = data.callId;

      const clientInstance = new StreamVideoClient({ apiKey, user, token });
      const callInstance = clientInstance.call(callType, callId);
      await callInstance.join({ create: true });
      
      setClient(clientInstance);
      setCall(callInstance);

      console.log('Joined call successfully');
    } catch (error) {
      setErrorMessage('User not found');
      console.error('Error joining call:', error);
    }
  };
  


  const handleCreateCall = async () => {
    try {
      const { userId, token } = await createUserCreator();
      await joinCall(userId, token);
    } catch (error) {
      console.error('Error creating user and call:', error);
    }
  };

  if (!call) {
    return (
      <div>
        <button onClick={handleCreateCall}>Create Call</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }

return (
  <div>
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <SpeakerLayout />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  </div>
);
};

export default CreateCallButton;
