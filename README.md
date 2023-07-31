# Sequlized Web Shop

## Description
This application is a back end for an e-commerce site. You use an Express.js API and configure it to use Sequelize to interact with a MySQL database. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Screenshots](#Screenshots)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)

## Installation
Clone the repository: **git clone https://github.com/Firene11/Sequelized-Web-Shop.git**

Open VSCode (or similar) and add your MySQL username and password to the environment variable file (.env) and you will be able to connect to a database using Sequelize.

## Usage

When you enter schema and seed commands, a development database is created and is seeded with test data.

From the command line in your terminal run the commmand:

**npm run seed** to seed the database

When you enter the command to invoke the application, the server is started and the Sequelize models are synced to the MySQL database.

When upi open API GET routes in Insomnia Core for categories, products, or tags, Then the data for each of these routes is displayed in a formatted JSON.

When you test API POST, PUT, and DELETE routes in Insomnia Core, you are able to successfully create, update, and delete data in the database.



**node server.js** to listen to the PORT

Choose an option from the list to view specific information from the employee database. Once you view the data, you are immediately able to choose another option. 

## Video

**Watch this VIDEO to see how the app runs!**

https://drive.google.com/file/d/1bwY-7LThdC4KT6zDUjcZ8zR8kpd0IgJX/view

## Screenshots

![Application](Images/sc1.jpg) 
![Application](Images/sc2.jpg) 
![Application](Images/sc3.jpg) 
![Application](Images/sc4.jpg) 
![Application](Images/sc5.jpg) 
![Application](Images/sc6.jpg) 
![Application](Images/sc7.jpg) 
![Application](Images/sc8.jpg) 
![Application](Images/sc9.jpg) 



## Credits
n/a

## Tests


## Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database