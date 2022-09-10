const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  const categories = await Category.findAll({
    include: [{ model: Product }],
    attributes: [category_name, product_name]
  })

  res.json(categories)
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {

  const singleCategory = await Category.findOne(req.params.id, {
    include: [{model:Product}],
    attributes: [category_name, product_name]
  })

  res.json(singleCategory)
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body);

  res.json(newCategory)
  // create a new category
});

router.put('/:id', async (req, res) => {
const updateCategory = await Category.update(req.params.id);

res.json(updateCategory)

  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
const deleteCategory = await Category.destroy(req.params.id)

res.json(deleteCategory)
  // delete a category by its `id` value
});

module.exports = router;
