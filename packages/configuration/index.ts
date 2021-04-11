import convict from "convict";

const configuration = convict({
  POSTGRES_USERNAME: {
    format: "*",
    env: "POSTGRES_USERNAME",
    sensitive: false,
    doc: "The username we will connect to the PostGres server as"
  },
  POSTGRES_DB: {
    format: "*",
    env: "POSTGRES_DB",
    sensitive: false,
    doc: "The database we will connect to on the PostGres server"
  },
  POSTGRES_PASSWORD: {
    format: "*",
    env: "POSTGRES_PASSWORD",
    sensitive: true,
    doc: "The password to authenticate to the PostGres server with"
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  }
});

export default configuration;