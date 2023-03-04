import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeConnect';




export class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});

console.log(User === sequelize.models.User);