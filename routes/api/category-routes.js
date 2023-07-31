const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Finds all categories and includes its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Finds one category by its `id` value and includes its associated Products
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });
    !category
      ? res.status(404).json({ message: "Oops! I did it again. I played with your heart, got lost in the route, because there is no category!" })
      : res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new category
  router.post("/", async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Updates a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "No category found!" });
    }
    await category.update(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "No category found!" });
    }
    await category.destroy(req.body);
    res.json({ message: "Category deleted." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
