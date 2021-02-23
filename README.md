## task-force-challenge-backend
Awesomity Lab application challenge

#### Steps To setup application
 
 - Clone this repo by `git clone https://github.com/hervebu/task-force-challenge-backend.git`
 - Run `cd task-force-challenge-backend`
 - `create a `.env` file`
 - Create `a mongo db` database for developnebt and assign its url to `dev_db_URI`
 - Create `a mongo db` database for tests and assign its url to `test_db_URI`
    * For the environment variables with those not stated here, 
    kindly use `.env.example` as guidance.
 - Run `docker build -t todoApp` to build docker image
 - Run `docker run -dp 27017:27017 todoApp`
 - Run `docker-compose build`
 - Run `npm install` to install the dependencies.
 - Start the server by  `npm start`

#### How to test the APIs

    You may use postman to test the apiser

  #Signup api `http://localhost:3000/user/signup`

    headers: 
     - "Content-Type": "application/json"
    
    body:

        {
            "name": "your name",
            "email": "enter a valid email",
            "password": "password"
        }

    You have to save the token from the responses to 
    use in operations on CRUD on to do items

  #Login api `http://localhost:3000/user/auth`

    headers: 
        {
            "Content-type": "application/json"
        }

    body: 
        {
            "email": "your email",
            "password": "password"
        }

    Also save the token aside.

 #create todo item api `method POST` `http://localhost:3000/toDo/item`
    header:
    - Authorization: `bearer token`
        `*token` is the one given on login or signup

    - Content-Type: application/json

    body: 
        {
            "title": "title",
            "description": "item description",
            "priority": "item priority"   
        }

    
 #Get all todo item of a user api `method GET`, url: `http://localhost:3000/toDo/items 
    
    headers:
    {
        Authorization: "bearer token"
    }
    
 #Get one todo item by id api `method GET`, url: `http://localhost:3000/toDo/item/{id} 
    
    headers:
    {
        Authorization: "bearer token"
    }   
  
 #Delete todo item of a user by id api `method DELETE`, url: `http://localhost:3000/toDo/item/{id} 
    
    headers:
    {
        Authorization: "bearer token"
    }

 
 #update todo item api by id `method PUT` `http://localhost:3000/toDo/item/{id}`
    header:
    - Authorization: `bearer token`
        `*token` is the one given on login 

    - Content-Type: application/json

    body: 
        {
            "title": "title",
            "description": "item description",
            "priority": "item priority"   
        }
   

