import express from 'express';
import contCustomer from "../controllers/customer.controller.js";
const router = express.Router();

router.get("/", function (_req, res) {
    res.status(200).json({
        message: "hooray! welcome to our api!"
    });
});

export default router;