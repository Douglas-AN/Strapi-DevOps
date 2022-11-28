module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'doug'),
      // user: env('DATABASE_USERNAME', 'Doug'),
      // password: env('DATABASE_PASSWORD', '56260169'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});