
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Product_Tag;
DROP TABLE IF EXISTS Tag;

CREATE TABLE Category (
    id int not null auto_increment primary key,
    category_name varchar(30) not null
);

CREATE TABLE Product (
   id int not null auto_increment primary key,
   product_name varchar(30) not null,
   price decimal not null,
   stock int not null default 10,
   category_id int,
   foreign key (category_id) references Category(id)
);

CREATE TABLE Tag (
    id int not null auto_increment primary key,
    tag_name varchar(30)
);

CREATE TABLE Product_Tag (
    id int not null auto_increment primary key,
    product_id int,
    foreign key (product_id) references Product(id),
    tag_id int,
    foreign key (tag_id) references Tag(id)
);