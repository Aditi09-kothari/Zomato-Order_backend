# Node MySQL API Project

This is a simple node.js API project that interacts with a MySQL database to retrieve and display order data using limit and offset.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL Server

-Set up your MySQL database:

- Create a database named orders.
- Configure the MySQL connection details in connector.js.

## API Endpoints

Retrieve Orders
- Endpoint: /api/orders
- Method: GET
  - Parameters:
     - offset : Offset for pagination (default is 0)
     - limit : Limit for pagination (default is 10)

## port is running on 8080.

like this      
curl http://localhost:8080/api/orders?offset=0&limit=10

## test case 
- I have also included test case for testing API 
  - Dev dependencies 
    - assert
    - mocha
    - mochawesome
    - supertest

## Dependencies

- Express.js
- MySQL
- Body Parser


This README provides basic information on how to set up and run the project, outlines the API endpoints, and includes a section for configuration and dependencies. 
