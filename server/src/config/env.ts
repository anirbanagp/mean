const config = {
  app: {
    description: "Just some description",
    name: "Test MEAN app",
  },
  db: {
    debug: true,
    options: {
      useNewUrlParser: true,
    },
    promise: global.Promise,
    url: "mongodb://localhost:27017/mean",
  },
  saltRounds: 10,
  secret: 'akshdkaj2398742lksaodsjdf;sod9w47r6;ofjsdf',
  server: {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || "3000",
  },
};

export default config;
