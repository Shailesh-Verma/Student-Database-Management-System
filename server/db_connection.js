const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    const mongoURI = 'mongodb://localhost:27017/Student';
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
connectToDatabase();
