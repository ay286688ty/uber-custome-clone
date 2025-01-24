# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

## Request Body

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `email`: A valid email address (required)
- `password`: A string with at least 9 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

## Responses

### Success

- **Status Code**: `201 Created`
- **Body**: A JSON object containing the authentication token and user details.

Example:

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors

- **Status Code**: `400 Bad Request`
- **Body**: A JSON object containing the validation errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be atleast 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must containe 8 minimum characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Example Response

Example of a successful response:

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
