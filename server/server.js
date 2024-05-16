const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { tokenProvider } = require('./token-provider'); // Import your token provider function
const {createUser} = require('./create-User');
const {createCall} = require('./create-call');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello from the API!');
  });



app.post('/create-user', async (req, res) => {
  try {
    const { userId, role, name } = req.body;
    const { userId: newUserId, token } = await createUser(userId, role, name);
    res.status(200).send({ userId: newUserId, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});


// // POST endpoint to create a call
// app.post('/create-call', async (req, res) => {
//   try {
//     const { creator_id, role, name, call_id, call_type, members } = req.body;

//     // Prepare creator's member data
//     const creatorMember = {
//       user_id: creator_id,
//       role: role, // Assuming creator is an organizer
//     };

//     // Create data object for call.create() function
//     const callData = {
//       data: {
//         created_by_id: creator_id,
//         members: [creatorMember, ...members.map(member => ({ user_id: member.id, role: member.role }))],
//       },
//     };

//     await createCall({ creator_id,call_id,call_type, callData }); // Pass object containing all data
//     res.status(200).send({ message: 'Call created successfully' });
//   } catch (error) {
//     console.error('Error creating call:', error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// });

  
//   Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));