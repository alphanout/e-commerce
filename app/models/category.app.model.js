'user strict';
import
db
from '../db/conn.js';

const _category = db.category;
const _products = db.products;

export default class category {
    constructor(category) {
        this.id = category.params.category_id;
        this.product_id = category.params.product_id;
    }

    async findAll() {
        return await _category.findAll({
            attributes: ["id", "name", "description"]
        });
    }
    async findById() {
        return await _category.findByPk(this.id, {
            attributes: ["id", "name", "description"]
        });
    }

    async findByProductId() {
        return await _products.findAll({
            include: [{
                model: _category,
                through: {
                    attributes: []
                },
                attributes: ["id", "name", "description"],
            }],
            where: {
                id: this.product_id
            },
            attributes: ["id", "name", "description", "price", "discounted_price"]
        });
    }
}