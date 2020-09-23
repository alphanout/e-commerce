import {
    secret
} from "../config/auth.config";
import jwt from "jsonwebtoken";
import validator from "validator";
export default (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (validator.isJWT(authHeader)) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(401).send({
                    message: "Unautherized"
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