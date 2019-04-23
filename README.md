# MyTaskList

Simple MEAN (mongojs) stack demo without angular-cli, only backend server is used. Can simplely add, delete, select tasks on a tasklist.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Your own MongoDB should be installed no matter 
locally such as [MongoDB Compass](https://www.mongodb.com/products/compass) 
or remotely like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

* Nodejs should be installed

```Bash
brew install node
```

### Installing

Install the dependencies

```Bash
npm install
```

## Running the project

Run the MongoDB server first
```Bash
mongod
```

Then open a new terminal and change to the root directory

```Bash
nodemon
```

We can see our simple project on http://localhost:3000/

## Built With

* [MongoDB/Mongojs](https://www.npmjs.com/package/mongojs/v/0.9.2) - The database for the project
* [Express](https://expressjs.com/) - Web backend framework
* [Angular2](https://angular.io/) - Web frontend framework
* [Nodejs](https://nodejs.org/en/) - Javascript running environment

