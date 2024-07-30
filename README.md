# Node.js User Registration API

This is a Node.js API for user registration with JWT authentication. The API allows users to register with their credentials and receive a JWT token upon successful registration.

## Features

- User Registration
- JWT Authentication
- Protected Routes

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (Json Web Token)
- bcrypt.js
- dotenv

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/satyaveer1994/user-register.git
    cd yourrepository
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/yourdbname
    JWT_SECRET=yourJWTSecretKey
    ```

2. Ensure you have a MongoDB instance running and replace `yourdbname` with your actual database name.
3. Replace `yourJWTSecretKey` with a strong, secret key used to sign JWT tokens.

## Running the Application

1. Start the backend server:

    ```bash
   nodemon src/server.js
    ```

    or, if you are using `nodemon` for automatic restarts:

    ```bash
    nodemon src/server.js
    ```

2. The server will be running on `http://localhost:5000`.

## API Endpoints

### User Authentication

- **POST /api/register**: Register a new user.

    ```bash
    curl -X POST http://localhost:5000/api/register \
    -H "Content-Type: application/json" \
    -d '{"userName": "abcdef", "userEmail": "abcdef@gmail.com", "password": "123123", "isJobProvider": false}'
    ```

- **POST /api/login**: Log in an existing user and receive a JWT token.

    ```bash
    curl -X POST http://localhost:5000/api/login \
    -H "Content-Type: application/json" \
    -d '{"userEmail": "abcdef@gmail.com", "password": "123123"}'
    ```

### Protected Routes

- **GET /api/protected**: Access a protected route using the JWT token.

    ```bash
    curl -X GET http://localhost:5000/api/protected \
    -H "Authorization: Bearer <yourJWTToken>"
    ```

## Error Handling

Error handling is implemented to provide appropriate responses for different scenarios, such as:

- Invalid user credentials
- Unauthorized access
- Server errors

For example, unauthorized access errors return a `401 Unauthorized` response.

## Deployment

1. Deploy the backend on a hosting service of your choice (e.g., Render, Heroku).
2. Ensure the `.env` file is properly configured in the deployment environment.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License.
