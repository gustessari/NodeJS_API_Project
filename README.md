# Node.js API with JWT Authentication

This is a simple Node.js project that demonstrates a basic API with JWT authentication.

## Features
- Login endpoint that returns a JWT token.
- Protected route that requires a valid JWT for access.

## How to run locally
1. Install dependencies: `npm install`
2. Start the server: `node app.js`
3. Use Postman or curl to test the API.

## Endpoints
- `POST /login`: Returns a JWT token for a simulated user.
- `GET /protected`: Access this route with a valid JWT in the `Authorization` header.

## Future Improvements
- Add user database integration.
- Implement additional authentication features.