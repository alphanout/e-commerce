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
        return await _category.findAll();
    }
    async findById() {
        return await _category.findByPk(this.id);
    }

    async findByProductId() {
        return await _category.findByPk({
            include: [{
                model: _products,
                as: 'products',
                through: {
                    attributes: []
                },
            }]
        });
    }
}