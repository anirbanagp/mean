module.exports = {
  app: {
    name: "Test MEAN app",
    description: "Just some description"
  },
  db: {
    promise: global.Promise,
    url: "mongodb://localhost:27017/mean",
    debug: true,
    options: {
      useNewUrlParser: true
    }
  },
  server: {
    port: process.env.PORT || "3000",
    host: process.env.HOST || "127.0.0.1"
  },
  secret: 'akshdkaj2398742lksaodsjdf;sod9w47r6;ofjsdf'
};
