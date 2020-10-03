'user strict';
import
db
from '../db/conn.js';

const _products = db.products;

export default class products {
    constructor(products) {

    }

    async findAddressById() {
        return await _products.findOne();
    }
}