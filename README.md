# Exercise Tracker API

An Express.js API server that creates a user and gets a list of exercises for that user as well as logs new exercises.

This is my solution for [Exercise Tracker Project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker) as a part of the curriculum for the [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis) on [freeCodeCamp](https://www.freecodecamp.org).

## Built With

- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [Moment.js](https://momentjs.com)
- [dotenv](https://github.com/motdotla/dotenv)
- [pino](https://getpino.io)
- [nodemon](https://nodemon.io)

## Demo

View the demo at https://tanimon-exercise-tracker.herokuapp.com/

## Instructions

After forking and cloning, navigate to the repository in your command line and install the NPM packages:

```
yarn install
```

Create a `.env` file in the root of the repository and add the following environment variables:

```
MONGODB_URI=<your-mongodb-uri>
```

Run the following script in your command line to launch the server in development mode:

```
yarn dev
```

Run the following script in your command line to start the server in production mode:

```
yarn start
```

Once the server is running, go to http://localhost:3000 in your browser.
