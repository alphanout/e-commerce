import authenticateJWT from '../middleware/authJwt.js';
import validation from '../middleware/SchemaValidator.js';
import express from 'express';
import contProducts from "../controllers/products.controller.js";
const router = express.Router();

router.get("/inCategory/:category_id", validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.category_id))
        contProducts.getProductByCategoryId(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param category_id"
        });
});
router.get("/:product_id", validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.product_id))
        contProducts.getById(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param product_id"
        });
});
router.get("/", validation(), authenticateJWT, (req, res) => {
    contProducts.getAll(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/:product_id/details", validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.product_id))
        contProducts.getById(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param product_id"
        });
});
router.get("/:product_id/reviews", validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.product_id))
        contProducts.getReviews(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param product_id"
        });
});
router.post("/:product_id/reviews", validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.product_id))
        contProducts.addReviews(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param product_id"
        });
});

export default router;