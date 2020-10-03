import authenticateJWT from '../middleware/authJwt.js';
import validation from '../middleware/SchemaValidator.js';
import express from 'express';
import contCategory from "../controllers/category.controller.js";
const router = express.Router();

router.get("/inProduct/:product_id", validation, authenticateJWT, (req, res) => {
    contCategory.getCategoryByProductId(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/", authenticateJWT, (req, res) => {
    contCategory.getAll(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
router.get("/:category_id", validation, authenticateJWT, (req, res) => {
    contCategory.getById(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });
});
export default router;