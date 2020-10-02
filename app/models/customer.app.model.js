'user strict';
import bcrypt from 'bcrypt';
import {
    BCRYPT_SALT_ROUNDS
} from '../config/auth.config.js';
import
db
from './conn.js';
import Op from "sequelize";

const _customer = db.customer;

export default class customer {
    constructor(customer) {
        this.password = customer.password;
        this.first_name = customer.first_name;
        this.last_name = customer.last_name;
        this.email = customer.email;
        this.phone_no = customer.phone_no;
    }

    async addCostumer() {
        const hashPassword = bcrypt.hashSync(this.password, BCRYPT_SALT_ROUNDS);
        const [user, created] = await _customer.findOrCreate({
            where: {
                // [Op.or]: [{
                //     email: this.email
                // }, {
                //     phone_no: this.phone_no
                // }],
                email: this.email,
            },
            defaults: {
                first_name: this.first_name,
                last_name: this.last_name,
                password: hashPassword,
            },
        });
        return [user, created];
    }
    async findCustomerByEmail() {
        return await _customer.findOne({
            where: {
                email: this.email
            }
        });
    }
    async findCustomerByPhone() {
        return await _customer.findOne({
            where: {
                phone_no: this.phone_no
            }
        });
    }
}