# database-advanced-schemas

# Working with more advanced mongoose schemas

Create a small API that can handle database interactions, while practising advanced schema validation

## What you will be doing

You will be creating a small REST API which connects to a database. This API will;

- create new users
- read existing users
- create articles
- read existing articles

## Tasks

### Task 1 - Getting ready

1. Initialise `npm`

2. Setup your server with the npm package [express](https://www.npmjs.com/package/express)

3. Add the `express.json()` middleware to allow JSON to be read from the request `body` object

4. Create the file `server.js`

### Task 2 - Creating the User schema and model

1. Create the folder `models`

2. Create the file `User.js` inside the `models` folder

3. Using the following data sample, create a schema in `User.js`

```json
{
   "firstName": "Tony",
   "lastName": "Iommi",
   "bands": [
      "Black Sabbath",
      "Heaven and Hell"
   ],
   "instrument": "guitar",
   "albums": [
      {
         "title": "Vol 4",
         "year": 1972
      },
      {
         "title": "Masters of Reality",
         "year": 1971
      }
   ],
   "birthday": "1950-12-09",
   "createdOn": 1649428492873
}
```

3. Amend the schema so that the following fields are `required`:
    - `firstName`
    - `lastName`
    - `birthday`

4. Amend the schema so that the `createdOn` field will `default` to `Date.now()`

5. Create a model for your schema, and export it

### Task 3 - Creating the Article schema and model

1. Create the file `Article.js` inside the `models` folder

2. Using the following data sample, create a schema in `Article.js`

```json
{
   "title": "When was the last time you ate lasagna",
   "author": "604f3895f7c6568b0902115e",
   "keywords":[
      "food",
      "lasagna",
      "pasta"
   ],
   "category": "Fooood",
   "comments": [
      {
         "text": "Bla bla bla i like pasta",
         "user":"604f3895f7c6568b0902115e"
      },
      {
         "text": "Bapa di bupi",
         "user": "604f3895f7c6568b0902115e"
      }
   ]
}
```

3. Amend the schema so that the following fields are `required`:
    - `title`
    - `author`

4. Create a model for your schema, and export it

### Task 4 - Creating endpoints for the User model

1. Create a `GET` endpoint for the path `/users` which **finds** **all** the users from the `User` model

2. Create a `POST` endpoint for the path `/users` which takes data from the request `body` object to **create** a new document in the `User` model

### Task 5 - Creating endpoints for the User model

1. Create a `GET` endpoint for the path `/articles` which **finds** **all** the users from the `Article` model

2. Create a `POST` endpoint for the path `/articles` which takes data from the request `body` object to **create** a new document in the `Article` model

## Bonus Tasks

### Create a new schema `album`

1. Create a separate `album` schema based on the properties in the `albums` field in the `user` schema

2. Modify the existing `albums` field to reference the new `album` schema as an array of subdocuments

### Create a new schema `comment`

1. Create a separate `comment` schema based on the properties in the `comments` field in the `article` schema

2. Modify the existing `comments` field to reference the new `comment` schema as an array of subdocuments