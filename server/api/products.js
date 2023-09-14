const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req, res, next) => {
    try {
        const allProducts = await prisma.products.findMany();
        res.send(allProducts);
    } catch(err) {
        next(err);
    }
})

// router.get('/:id', async (req, res, next) => {
//     try {
//         const product = await prisma.products.findUnique({
//             where:{
//                 id: Number(req.params.id)
//             }
//         });
//         res.send(product);
//     } catch(err) {
//         next(err);
//     }
// })