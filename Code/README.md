# Microservices-based-Shoes-Store
This is a final project of SOA with Microservices-based architecture


# Features
- Fundamental of Express: routing, middleware, sending response and more
- Fundamental of Mongoose: Data models, data validation and middleware
- RESTful API including pagination,sorting and limiting fields
- CRUD operations with MongoDB
- Security: encyption, sanitization and more
- Authorization (User roles and permissions)
- Enviroment Varaibles
- handling error outside Express
- Catching Uncaught Exception

# Project Structure
- app.js : Configure everything that has to do with Express application and MongoDB. 
- .env: for Enviroment Varaiables
- routes -> login.js,transaction.js: The goal of the route is to guide the request to the correct handler function 
- models -> User.js, Transaction.js, StudentDept: (Business logic) related to business rules, how the business works and business needs
- 
## Requirements
* [MongoDB](https://www.mongodb.com/download-center "MongoDB")
* [NodeJS](https://nodejs.org/en/download "NodeJS") (Lasted Version in order to use Fetch API)

## Build for local development (each services must run once)
(run client folder to use GUI)
Use following command to install requires module:

```sh
npm install
```
Use following command to start project on staging and production environments:

```sh
npm start
```

See `package.json` for more details.
