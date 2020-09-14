# welp
Welp! Can't decide :/


Frustrated from your group of friends  couldn't decide on a place to eat? 
Well, introducing Welp! for those moments where you let a random algorithm decide your meal.

To get started: clone down a version of this application using the top right clone/copy git clone button.

once into Terminal, make sure you have npm and git accessible.
run ```npm install``` in one terminal, and ```npm run build``` in another

On success: you should be able to see the following message: "Successfully connected to Welp! on http://localhost:3333/"

Navigate to your browser and enter the URL http://localhost:3333/

Demo:
<p align="center"><img src="https://welpassets.s3-us-west-1.amazonaws.com/demo.gif"/></p>
For Review use purpose:

# express-review

### Setup
- npm install
- npm run init-database
- npm run build
- npm start
- npm run dev [OPTIONAL]

## Ultimate Goal:
- Setup express.js to provide routing & basic CRUD endpoints to accommodate with front-end functionality

## Step 1
- Check [Express.js official docs](https://expressjs.com/en/api.html) to get started
- Define port with port number 3333
- Set up relevant middlewares alongside with express (body parser, CORS, morgan, etc)
- Serve [static](https://expressjs.com/en/starter/static-files.html) files (html, css) in /client/public folder using ```express.static```
- Understand the purpose of '/' argument in serving static files
- Direct all requests after the url '/api' with express router
- Initialize the express server with listen method, providing port and callback

## Step 2
- Initialize router.js file with require statements.
- Create a route to '/add' with a POST request to invoke ```addOne()``` in controllers.js
- export router object

## Step 3
- Fill in request handling in controller.js for ```addOne()``` method (refer to official docs if needed)
- Test '/add' endpoint via [Postman](https://www.postman.com/downloads/)

## Step 4
- Create a route to '/all' with a GET request to invoke ```getAll()``` in controllers.js
- Fill in request handling in controller.js for ```getAll()``` method (refer to official docs if needed)
- Test via Postman

## Step 5
- Create a route to '/all' with a DELETE request to invoke ```deleteAll()``` in controllers.js
- Fill in request handling in controller.js for ```deleteAll()``` method (refer to official docs if needed)
- Test via Postman

## Step 6
- Create a route to '/deleteOne/:id' with a DELETE request to invoke ```deleteOne()``` in controllers.js
- Fill in request handling in controller.js for ```deleteOne()``` method (refer to official docs if needed)
- Test via Postman

## EXTRA CREDIT
- Add an UPDATE endpoint to your routes for update functionality (requires further front-end integration)
- Serve an ABOUT page with express static
