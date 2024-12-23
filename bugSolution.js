const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    if (!req.body || !req.body.name) {
      return res.status(400).send('Missing user name');
    }
    const user = req.body;
    console.log(user.name);
    res.send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));