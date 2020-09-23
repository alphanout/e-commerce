import validator from "validator";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default (req, res, next) => {
    const password = req.headers.password;
    const email = req.headers.email;
    const firstName = req.headers.firstName;
    const lastName = req.headers.lastName;
    if (validator.isAlpha(firstName) && validator.isAlpha(lastName) && validateEmail(email) && validator.isAlpha(password)) {
        if (validator.isByteLength(password, {
                min: 8,
                max: 32
            })) {

            next();
        } else {
            res.status(406).send({
                error: "password length should be in 8 to 32"
            });
        }
    } else {
        res.status(400).send({
            error: "All parameters are required"
        });
    }
};