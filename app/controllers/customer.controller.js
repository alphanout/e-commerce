'use strict';
import * as customer from '../models/customer.app.model';

export function addCustomer(req, res) {
    var new_customer = new customer(req.body);
    if (!new_customer.first_name || !new_customer.last_name || !new_customer.password)
        res.status(400).send({
            error: true,
            message: 'Please provide all relevant data'
        });
    else {
        const [user, created] = customer.addCostumer(new_customer);
        if (user !== null) {
            if (created)
                return res.status(200).json({
                    message: "signup successful"
                });
            else
                return res.status(400).json({
                    message: "email or phone no. already exist"
                });
        } else {
            return res.status(500).send(res);
        }
    }
}