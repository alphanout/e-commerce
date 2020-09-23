import {
    DataTypes
} from "sequelize";
export default () => {
    return {
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
            Sequelize: DataTypes.STRING,
            validate: {
                isEmail: true,
                checkUserRegistry(value) {
                    if (value === null && this.phone_no === null)
                        throw new Error("Email or Phone no. is required");
                }
            }
        },
        phone_no: {
            unique: true,
            Sequelize: DataTypes.STRING,
            validate: {
                len: [10, 10],
            }
        },
        password: {
            type: DataTypes.STRING,
            len: [8, 32],
            allowNull: false
        },
        address_1: {
            type: DataTypes.TEXT
        },
        address_2: {
            type: DataTypes.TEXT
        },
        city: {
            type: DataTypes.STRING
        },
        region: {
            type: DataTypes.STRING
        },
        postal_code: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        shipping_region_id: {
            type: DataTypes.INTEGER
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
};