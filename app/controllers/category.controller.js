'use strict';
import category from '../models/category.app.model.js';
export default class contCategory {
    contCategory() {}

    static async getAll(req, res) {
        var _category = new category(req);
        const rows = await _category.findAll();
        if (rows) return res.status(200).json({
            count: rows.length,
            rows: rows
        });
        else return res.status(400).json({
            error: 'unknow'
        });
    }

    static async getById(req, res) {
        var _category = new category(req);
        const rows = await _category.findById();
        if (rows) return res.status(200).json({
            rows: rows
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }

    static async getCategoryByProductId(req, res) {
        var _category = new category(req);
        const rows = await _category.findByProductId();
        if (rows) return res.status(200).json({
            rows: rows
        });
        else return res.status(400).json({
            error: 'invalid id'
        });
    }

}