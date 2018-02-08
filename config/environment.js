module.exports = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'xSFI92aslk',
  db: {
    production: process.env.DATABASE_URL,
    development: 'postgres://localhost:5432/londonroasters'
  },
  env: process.env.NODE_ENV || 'development'
};
