import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    database: 'Users',
    username: 'tester',
    password: 'password123',
    dialect: 'mysql',
    host: 'localhost'
})

export const sqlConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection has been established successfully')
    } catch (error) {
        console.error('Unable to connectg to the datgabase', error)
    }
}

