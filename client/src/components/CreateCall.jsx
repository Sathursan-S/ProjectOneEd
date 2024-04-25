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
    "creator_id": "test",
    "role": "admin",
    "name": "Himosh",
    "call_id": "my-first-call",
    "call_type": "default",
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
      const response = await axios.post('http://localhost:5000/create-user', { userId: data.creator_id, role: data.role, name: data.name });
      const { userId, token } = response.data;
      setUserId(userId);
      setToken(token);
      setErrorMessage('');
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      return { userId, token };
    } catch (error) {
      setErrorMessage('Error creating user');
      console.error('Error creating user:', error);
    }
  };

  const createCall = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-call', data);
      // const { callId, callType } = response.data;
      // console.log('Call created successfully:', { callId, callType });
      // setCallId(callId);
      // setCallType(callType);
      // setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error creating call');
      console.error('Error creating call:', error);
    }
  };

  
  const joinCall = async () => {
    try {
      const apiKey = 'zqzcsd5wgg5q';

      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVzdCIsImV4cCI6MTcxMzg5NDg2NywiaWF0IjoxNzEzODkxMjY3fQ.swG0spFGRY9dvT2lpwHAdJYpcCm3T22dGvQDfBUMrQ0';
      
      const user = {
        id: 'test', // Ensure userId is set here
      };
      const callType = data.call_type;
      const callId = data.call_id;
      
      const clientInstance = new StreamVideoClient({ apiKey, token, user});
      const callInstance = clientInstance.call( callType, callId );
      callInstance.join({ create: true });
      setClient(clientInstance);
      setCall(callInstance);

//       const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call('default', 'my-first-call');
// call.join({ create: true });

      console.log('Joined call successfully');
    } catch (error) {
      setErrorMessage('User not found');
      console.error('Error joining call:', error);
    }
  };
  
  // const CreateCallButton = async (userId,token) => {
  //   try {
  //     await createUserCreator();
  //     await createCall();
  //     await joinCall(userId, token);
  //   } catch (error) {
  //     console.error('Error creating user and call:', error);
  //   }
  // };

  const CreateCallButton = async () => {
    try {
      const { userId, token } = await createUserCreator();
      await createCall();
      await joinCall(userId, token);
    } catch (error) {
      console.error('Error creating user and call:', error);
    }
  };
  
// Ensure call is not null before rendering components that depend on it
if (!call) {
  return (
    <div>
      <button onClick={CreateCallButton}>Create Call</button>
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
