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

# User Login Endpoint

## Endpoint

`POST /users/login`

## Description

This endpoint is used to authenticate a user and generate a JWT token.

## Request Body

The request body should be a JSON object with the following properties:

- `email`: A valid email address (required)
- `password`: A string with at least 9 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

## Responses

### Success

- **Status Code**: `200 OK`
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

### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the authentication errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid email or password",
      "param": "email",
      "location": "body"
    }
  ]
}
```

# User Logout Endpoint

## Endpoint

`POST /users/logout`

## Description

This endpoint is used to log out a user by invalidating the JWT token.

## Request Body

No request body is required.

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**: A JSON object confirming the logout.

Example:

```json
{
  "msg": "Successfully logged out"
}
```

# User Profile Endpoint

## Endpoint

`GET /users/profile`

## Description

This endpoint is used to retrieve the profile details of the authenticated user.

## Request Headers

- `Authorization`: Bearer token (required)

## Responses

### Success

- **Status Code**: `200 OK`
- **Body**: A JSON object containing the user details.

Example:

```json
{
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

### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Body**: A JSON object containing the authentication errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid token",
      "param": "token",
      "location": "headers"
    }
  ]
}
```

# Captain Registration Endpoint

## Endpoint

`POST /captains/register`

## Description

This endpoint is used to register a new captain. It validates the input data and creates a new captain in the database.

## Request Body

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: An integer with a minimum value of 1 (required)
  - `vehicleType`: A string that must be one of "car", "motorcycle", or "auto" (required)

Example:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
