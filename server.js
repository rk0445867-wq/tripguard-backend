const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Trip Guard API is Running ✅');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ 
    success: true, 
    message: 'Login success', 
    token: 'fake-jwt-token-123' 
  });
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  res.json({ 
    success: true, 
    message: 'User created', 
    user: { name, email } 
  });
});

app.get('/safe-places', (req, res) => {
  res.json([
    { city: 'Delhi', country: 'India', place: 'CP', type: 'safe' },
    { city: 'Panipat', country: 'India', place: 'Park', type: 'safe' },
    { city: 'Mumbai', country: 'India', place: 'Marine Drive', type: 'safe' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});