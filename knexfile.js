module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/Users.db'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'Usersdb',
      user: 'test',
      password: 'test'
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
