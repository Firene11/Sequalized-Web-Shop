
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

drop table if exists Category;

create table Category (
    id int not null auto_increment primary key,
    category_name varchar(30) not null
);