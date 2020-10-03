'user strict';
import
db
from '../db/conn.js';

const _category = db.category;

export default class category {
    constructor(category) {

    }

    async findAddressById() {
        return await _category.findOne();
    }
}