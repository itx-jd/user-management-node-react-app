module.exports = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://admin:admin@cluster0.191ig3q.mongodb.net/userdb',
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  };
  