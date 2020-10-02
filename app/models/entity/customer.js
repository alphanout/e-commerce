import DataTypes from "sequelize";
export var customer = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        unique: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            // checkUserRegistry(value) {
            //     if (value === null && this.phone_no === null)
            //         throw new Error("Email or Phone no. is required");
            // }
        }
    },
    phone_no: {
        unique: true,
        type: DataTypes.INTEGER,
        validate: {
            len: [10, 10],
        }
    },
    password: {
        type: DataTypes.STRING,
        len: [8, 32],
        allowNull: false
    },
    credit_card: {
        type: DataTypes.STRING,
        validate: {
            isCreditCard: true,
        }
    },

    // username: {
    //     unique: true,
    //     type: type.STRING,
    //     allowNull: false
    // },
};