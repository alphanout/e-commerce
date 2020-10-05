'use strict';
import products from '../models/products.app.model.js';
import reviews from '../models/reviews.app.model.js';
export default class contProducts {
    contProducts() {}
    static async getAll(req, res) {
        var _products = new products(req);
        const rows = await _products.findAll();
        if (rows) return res.status(200).json({
            count: rows.length,
            rows: rows
        });
        else return res.status(400).json({
            error: 'unknow'
        });
    }

    static async getById(req, res) {
        var _products = new products(req);
        const rows = await _products.findById();
        if (rows) return res.status(200).json({
            rows: rows
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }

    static async getProductByCategoryId(req, res) {
        var _products = new products(req);
        const rows = await _products.findByCategoryId();
        if (rows) return res.status(200).json({
            rows: rows
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }

    static async getReviews(req, res) {
        var _reviews = new reviews(req);
        const rows = await _reviews.findReview();
        if (rows) return res.status(200).json({
            count: rows.length,
            rows: rows
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }

    static async addReviews(req, res) {
        var _reviews = new reviews(req);
        const rows = await _reviews.addReview();
        if (rows) return res.status(200).json({
            messgae: "review added successfully"
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }
}