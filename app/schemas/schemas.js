import Joi from 'joi';

const customersValidation = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ['com', 'net']
        }
    }).required(),
    password: Joi.string().min(6).required(),
    address: Joi.string(),
    city: Joi.string(),
    mob_phone: Joi.string().regex(/^\d+$/).length(10),
    credit_card: Joi.string().regex(/^\d+$/).length(12)
});

const addressValidation = Joi.object({
    address: Joi.string().required(),
    city: Joi.string().required(),
    postal_code: Joi.string().regex(/^\d+$/).length(6).required()
});

const creditCardValidation = Joi.object({
    credit_card: Joi.string().regex(/^\d+$/).length(12).required()
});

// export the schemas
export default {
    // "/customers/creditCard": creditCardValidation,
    // '/auth/edit': authDataSchema,
    // '/fees/pay': feesDataSchema
};