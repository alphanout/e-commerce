'use strict';
import customer from '../models/customer.app.model.js';
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    secret
} from "../config/auth.config.js";
export default class contCustomer {
    contCustomer() {}
    static async addCustomer(req, res) {
        var new_customer = new customer(req.body);
        if (!new_customer.first_name || !new_customer.last_name || !new_customer.password)
            res.status(400).send({
                error: true,
                message: 'Please provide all relevant data'
            });
        else {
            const [user, created] = await new_customer.addCostumer();
            if (user !== null) {
                if (created)
                    return res.status(200).json({
                        message: "signup successful"
                    });
                else
                    return res.status(400).json({
                        message: "email already exist"
                    });
            } else {
                return res.status(500).send(res);
            }
        }
    }
    static async login(req, res) {
        var _customer = new customer(req.body);
        if (!_customer.password || !_customer.phone_no || !_customer.email) res.status(400).send({
            error: true,
            message: 'Please provide all relevant data'
        });
        else if (!_customer.phone_no && validator.isMobilePhone) res.status(400).send({
            error: true,
            message: 'invalis phone no.'
        });
        else {
            const checklogin = await _customer.findCustomerByEmail();
            if (checklogin !== null) {
                if (bcrypt.compareSync(_customer.password, checklogin.password)) {
                    console.log(`user found & logged in ${checklogin.id}`);
                    var token = jwt.sign({
                        id: _customer.email
                    }, secret, {
                        expiresIn: 86400,
                    });
                    return res.status(200).json({
                        auth: true,
                        id: checklogin.id,
                        bearer: token,
                        message: 'sign in successful'
                    });
                } else {
                    return res.status(400).json({
                        error: "password does not match"
                    });
                }
            } else {
                return res.status(400).json({
                    error: "user not found"
                });
            }
        }
    }
}