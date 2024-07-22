const router = require('express').Router();

// Import API routes
const productRoutes = require('./api/products-routes');
const categoryRoutes = require('./api/category-routes');
const tagRoutes = require('./api/tag-routes');

// Define API routes

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
