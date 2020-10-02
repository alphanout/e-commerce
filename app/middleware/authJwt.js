import {
    secret
} from "../config/auth.config.js";
import jwt from "jsonwebtoken";
import validator from "validator";
const jwtAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(typeof authHeader  === 'undefined'){
        return res.status(400).send({
            error: "The apikey is required"
        });
    }
    if (validator.isJWT(authHeader)) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(401).send({
                    message: 'Unautherized'
                });
            }
            req.user = user;
            next();
        });

    } else {
        res.status(400).send({
            error: "The apikey is invalid.."
        });
    }
};
export default jwtAuth;