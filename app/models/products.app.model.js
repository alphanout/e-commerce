'user strict';
import
db
from '../db/conn.js';
const _products = db.products;
const _category = db.category;
export default class products {
    constructor(products) {
        this.id = products.params.product_id;
        this.category_id = products.params.category_id;
    }
    async findAll() {
        return await _products.findAll({
            attributes: ["id", "name", "description", "price", "discounted_price"]
        });
    }
    async findById() {
        return await _products.findByPk(this.id, {
            attributes: ["id", "name", "description", "price", "discounted_price"]
        });
    }
    async findByCategoryId() {

        return await _category.findAll({
            include: [{
                model: _products,
                as: 'products',
                through: {
                    attributes: []
                },
                attributes: ["id", "name", "description", "price", "discounted_price"],
            }],
            where: {
                id: this.category_id
            },
            attributes: ["name", "description"]
        });
    }
}