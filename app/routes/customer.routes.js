import authenticateJWT from '../middleware/authJwt.js';
import verifySignup from '../middleware/verifySignup.js';
import express from 'express';
import contCustomer from "../controllers/customer.controller.js";
const router = express.Router();

router.get("/", authenticateJWT, (req, res) => {
    return res.status(200).send({
        id: req.customer.id
    });
});
router.put("/", authenticateJWT, (req, res) => {
    contCustomer.updateCustomer(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});

export default router;