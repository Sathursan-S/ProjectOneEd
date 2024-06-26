const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createInstructorUser, createStudentUser, getTokenForStudent } = require('./createUser');
const { createCall } = require('./createCall');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello from the API!');
});

app.post('/classdata', async (req, res) => {
  const classData = req.body;
  try {
    const createInstructorResults = await createInstructorUser(classData);
    const createStudentResults = await createStudentUser(classData);
    const createCallResults = await createCall(classData);
    res.status(200).send({
      createCallResults,
      createInstructorResults,
    });
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.post('/api/token', async (req, res) => {
  const { studentId } = req.body; // Destructure studentId from req.body
  console.log('Received request for studentId:', studentId); // Log the received studentId

  try {
    const token = await getTokenForStudent(studentId); // Assuming getTokenForStudent is defined
    res.status(200).send({ token });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
