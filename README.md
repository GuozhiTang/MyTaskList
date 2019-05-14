# MyTaskList
![](https://img.shields.io/badge/node-^6.7.0-blue.svg) ![](https://img.shields.io/badge/angular-^2.0.1-blue.svg)<br>

Simple MEAN (mongojs) stack demo without angular-cli, only backend server is used. Can simplely add, delete, select tasks on a tasklist. User can directly add new task by tapping `Enter` on the keyboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Your own MongoDB should be installed no matter 
a local one such as [MongoDB Compass](https://www.mongodb.com/products/compass)
 or a remote one like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

* Nodejs should be installed

```Bash
brew install node
```

### Installing

* Install the dependencies for the backend at root directory:

```Bash
npm install
```

* Then, install the dependencies for the angular frontend at client folder:

```Bash
cd client

npm install
```

## Running the project

* First, run the MongoDB server:
```Bash
mongod
```

* Then open a new terminal and change to the root directory to run the backend server:

```Bash
nodemon
```

Then, we can see our simple project on http://localhost:3000.

## Built With

* [MongoDB/Mongojs](https://www.npmjs.com/package/mongojs/v/0.9.2) - The database for the project and the related small API.
* [Express](https://expressjs.com/) - Web backend framework.
* [Angular2](https://angular.io/) - Web frontend framework.
* [Nodejs](https://nodejs.org/en/) - Javascript running environment.

