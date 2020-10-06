import DataTypes from "sequelize";
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    description: {
        type: DataTypes.TEXT,
    },
};