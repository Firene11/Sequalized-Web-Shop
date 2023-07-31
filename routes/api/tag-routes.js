const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Finds all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: { model: Product, through: ProductTag, },
    });
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "No tags found.", error: err });
  }
});
  
// Finds a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: { model: Product, through: ProductTag, },
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json({ message: "No tags found.", error: err });
  }
});

// Creates a new tag
router.post("/", async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.json(tag);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
});

// Updates a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  const tag_id = req.params.id;
  try {
    await Tag.update(req.body, {
      where: { id: tag_id, },
    });
    if (!tag_id) {
      return res.status(404).json({ message: "No tags found.", error: err });
    }
    res.status(200).json({ message: "Updated tag." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error", error: err });
  }
});

// Deletes on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(500).json({ message: "No tags found.", error: err });
    }
    await tag.destroy();
    res.json("Deleted tag.");
  } catch (err) {
    res.status(500).json({ message: "Error", error: err });
  }
});

module.exports = router;
