const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { tokenProvider } = require('./token-provider'); // Import your token provider function
const {createUser} = require('./create-User');
const {createCall} = require('./create-call');
const app = express();

app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(express.json());

// const users = ['test123', 'user2', 'user3'];

// Define API route
app.get('/api', (req, res) => {
    res.send('Hello from the API!');
  });


// POST endpoint to receive user creation requests
app.post('/create-user', async (req, res) => {
  try {
    const { userId, role, name } = req.body; // Destructure userData object to get userId, role, and name
    await createUser(userId, role, name); // Call createUser function with necessary parameters
    // Assuming your createUser function returns a token, handle it accordingly
    res.status(200).send({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});



// POST endpoint to create a call
app.post('/create-call', async (req, res) => {
  try {
    const { creator_id, role, name, call_id, call_type, members } = req.body;

    // Prepare creator's member data
    const creatorMember = {
      user_id: creator_id,
      role: role, // Assuming creator is an organizer
    };

    // Create data object for call.create() function
    const callData = {
      data: {
        created_by_id: creator_id,
        members: [creatorMember, ...members.map(member => ({ user_id: member.id, role: member.role }))],
        custom: {
          color: 'blue', // Example of custom data
        },
      },
    };

    await createCall({ creator_id,call_id,call_type, callData }); // Pass object containing all data
    res.status(200).send({ message: 'Call created successfully' });
  } catch (error) {
    console.error('Error creating call:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

  
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