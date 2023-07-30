// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Cetgory, {
  foreignKey: 'category_id',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


/*
Product belongs to Category, as a category can have multiple products but a product can only belong to one 
category.

Category has many Product models.

Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple 
tags and tags to have many products.

Tag belongs to many Product models.
*/