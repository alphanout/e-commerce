'user strict';
import bcrypt from 'bcrypt';
import {
    BCRYPT_SALT_ROUNDS
} from '../config/auth.config';
import {
    costumer
} from './conn';
import {
    Op
} from "sequelize";

class customerdb {
    constructor(customerdb) {
        this.password = customerdb.password;
        this.first_name = customerdb.first_name;
        this.last_name = customerdb.last_name;
        this.email = customerdb.email;
        this.phone_no = customerdb.phone_no;
    }

    static async addCostumer() {
        const hashPassword = bcrypt.hashSync(this.password, BCRYPT_SALT_ROUNDS);
        const [user, created] = await costumer.findOrCreate({
            where: {
                [Op.or]: [{
                    email: this.email
                }, {
                    phone_no: this.phone_no
                }],
            },
            defaults: {
                first_name: this.first_name,
                last_name: this.last_name,
                password: hashPassword,
            },
        });
        return [user, created];
    }
    static findCustomerByEmail() {

    }
}