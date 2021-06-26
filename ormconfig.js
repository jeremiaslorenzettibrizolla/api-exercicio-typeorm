require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronizer: false,
    loggin: false,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    entities: [
        './src/core/data/database/entities/**/*'
    ],
    migrations: [
        'src/core/data/database/migrations/**/*'
    ],
    cli: {
        entitiesDir: './src/core/data/database/entities/**/*',
        migrationsDir: './src/code/data/database/**/*'
    }
}