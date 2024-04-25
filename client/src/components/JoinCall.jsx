import React from 'react'

function JoinCall() {
  return (
    <div>JoinCall</div>
  )
}

export default JoinCall


  // const joinCall = async () => {

  //   try {
  //     const apiKey = 'zqzcsd5wgg5q';

  //     const response = await axios.post('http://localhost:5000/join-call', { userId: String(userNew.id),role: userNew.role, name: userNew.name });
  //     const { userId, token } = response.data;
      
  //     // Save user ID and token to state
  //     setNewUserId(userId);
  //     setNewToken(token);
  //     setErrorMessage('');
      
  //     // Save user ID and token to local storage
  //     localStorage.setItem('userId', userId);
  //     localStorage.setItem('token', token);

  //     // Initialize client and call
  //     const clientInstanceNew = new StreamVideoClient({ apiKey, token, userNew});
  //     const callInstanceNew = clientInstanceNew.call('default', 'my-first-call');
  //     callInstanceNew.join({ create: true });

  //     // Set client and call to state
  //     setClient(clientInstanceNew);
  //     setCall(callInstanceNew);

  //     // You can perform any additional actions here
  //     console.log('Joined call successfully');
  //   } catch (error) {
  //     // Display error message if user not found
  //     setErrorMessage('User not found');
  //     console.error('Error joining call:', error);
  //   }
  // };
