import authenticateJWT from '../middleware/authJwt.js';
import validation from '../middleware/SchemaValidator.js';
import express from 'express';
import contCategory from "../controllers/category.controller.js";
const router = express.Router();

router.route("/inProduct/:product_id").get(validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.product_id))
        contCategory.getCategoryByProductId(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param product_id"
        });
});
router.route("/").get(validation(), authenticateJWT, (req, res) => {
    contCategory.getAll(req, res).catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });

});
router.route("/:category_id").get(validation(), authenticateJWT, (req, res) => {
    if (parseInt(req.params.category_id))
        contCategory.getById(req, res).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    else
        res.status(400).send({
            error: "Invalid param category_id"
        });
});
export default router;