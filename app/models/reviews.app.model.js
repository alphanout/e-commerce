'user strict';
import
db
from '../db/conn.js';

const _reviews = db.reviews;

export default class reviews {
    constructor(reviews) {

    }

    async findAddressById() {
        return await _reviews.findOne();
    }
}