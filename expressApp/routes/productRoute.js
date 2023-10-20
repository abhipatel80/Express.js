import express from 'express';
const router = express();
import productModel from '../models/productModel.js';

// setup path module
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// use template engines
router.set('view engine', 'hbs');
router.set("views", path.join(__dirname, '../templates/views'));

router.post("/add", async (req, res) => {
    try {
        const data = await productModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        console.log(e);
    }
});

router.get("/get", async (req, res) => {
    try {
        const response = await productModel.find();
        const data = response[0];
        res.render('index', { data });
    } catch (e) {
        console.log(e);
    }
});

router.put("/edit/:id", async (req, res) => {
    try {
        const data = await productModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(201).json(data);
    } catch (e) {
        console.log(e);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        res.status(201).json("product deleted");
    } catch (e) {
        console.log(e);
    }
});

export default router;
