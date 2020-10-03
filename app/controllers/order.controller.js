'use strict';
import customer from '../models/customer.app.model.js';
import address from '../models/address.app.model.js';
import validator from "validator";
export default class contOrders {
    contOrders() {}

    static async putAddress(req, res) {
        //TODO: validatebody
        var _address = new address(req);
        const [user, created] = await _address.addAddress();
        if (created) return res.status(200).json({
            message: 'Address added succesfully'
        });
        else return res.status(200).json({
            message: 'Address updated succesfully'
        });
    }
}