module.exports = [
  {
    context: '/api',
    target: 'http://localhost:8000',
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
];
