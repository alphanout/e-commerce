import authenticateJWT from '../middleware/authJwt.js';
import validation from '../middleware/SchemaValidator.js';
import express from 'express';
import contProducts from "../controllers/products.controller.js";
const router = express.Router();

router.get("/inCategory/{category_id}", validation, authenticateJWT, (req, res) => {
    contCategory.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/{product_id}", validation, authenticateJWT, (req, res) => {
    contProducts.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/", validation, authenticateJWT, (req, res) => {
    contProducts.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/{product_id}/details", validation, authenticateJWT, (req, res) => {
    contProducts.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/{product_id}/reviews", validation, authenticateJWT, (req, res) => {
    contProducts.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.put("/{product_id}/reviews", validation, authenticateJWT, (req, res) => {
    contProducts.updateProducts(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});

export default router;