'user strict';
import
db
from '../db/conn.js';

const _products = db.products;

export default class products {
    constructor(products) {
        this.id = products.params.products_id;
    }

    async findAll() {
        return await _products.findAll();
    }
    async findById() {
        return await _products.findByPk(this.id);
    }
}