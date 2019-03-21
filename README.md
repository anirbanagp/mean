# Mongo Express Angular Node dummy application

In this project we are going to create a shopping cart using MEAN stack. Not only that we are using Typescript instead of plain javascript with Express. We will use Express as API server and Angular as a frontend framework. Both will be separated. 

## Contains
##### Authentication using JWT
    We have implemented JWT token here, so protecting a route using middleware is so easy.

>router.get("/home", authenticated, AuthController.index.bind(AuthController));

##### Formatted Success Response
   We are using a base controller to make our task easier. By using base class functionlities sending same formatted API response is like :
>
>this.data = user;
>res.json(this.apiResponse);
>
which will return a reponse like :

```
{
	error: false
	message: "Successfuly received",
	data: {
	"_id": "5c600d0b1b3c6506e48587c7",
	"email": "anirban@gmail.com",
	"name": "Anirban Saha",
	"__v": 0
	 }
}
```
##### Formatted Error Response
##### Exception Classes
##### Request Validation Classes
##### async/await syntax

## Versions
* Node : 10.15.0
* Express :  4.16.4
* Mongoose: 5.4.17
* Angular : 7.1.0
* Typescript : 3.3.33

## Express Structure

```
|- src
|   |- app
|   |    |- http
|   |    |    |- controllers
|   |    |    |- exceptions
|   |    |    |- middlewares
|   |    |    |- services
|   |    |    |- validations
|   |    |- models
|   |    |- shared
|   |    |    |- classes
|   | - config
|   | - core
|   | - routes
|   | - server.ts
```
**Server.ts**

This is the entry point of the project. this will initialize the app and run the server.

**Core**

 This folder contains some core files which is responsible to start the express server, connect mongoDb with our application, initialize required middlewares and as well as routes. 
 
 **Config**
 
 This folder contains configuration of the application.
 
 **Routes**
 
 We are creating a separate route file for every module in this folder. As well as we can treat these files as individual route group. we can add prefix, middleware to each file.
 
 **Models**
 
 We are placing all models in this folder. 
 
 **Shaerd**
 
 We can place all common files like `BaseController`, `BaseService` or common mixins, interfaces here. 
 
 **Controllers**
 
  We can nested controllers into sub folder as well as use the flat structure.
  
  **Exceptions**
  
  We are placing all exception files here. This files are responsible to throw relevent exceptions along with desired http status. As we have moved error handling in a separate module our controller will be less complicated with common error handling code.
  
**Middlewares** 

Except some third party middlewares our applications demand some custom middlewares. We can place them here. By these middlewares we can authenticate a request, we can validate request params as well as handle error globaly.

**Services**

We are using service based approch in this application. All of our models will be wrapped with a service class. and all of our business logice will be in a service. We should follow a service per model approch and we can use Dependency  Injection to use other models functionalities in a different model. By this approch all business logic of a Collection will be centralised as well as our controller will be less complecated. 

**Validations**

We are using class-validator npm packages to validate a request. All the request validation rules will be placed in this folder. 
