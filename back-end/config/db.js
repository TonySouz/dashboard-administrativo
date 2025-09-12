const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, { });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Erro MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;