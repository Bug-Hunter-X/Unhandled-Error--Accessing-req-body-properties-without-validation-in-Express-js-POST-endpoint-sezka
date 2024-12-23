# Unhandled Error: Missing req.body validation in Express.js POST endpoint

This repository demonstrates a common error in Express.js applications: accessing properties of `req.body` without proper validation.  When an empty or malformed JSON payload is sent to a POST endpoint, the application crashes because it attempts to access properties that don't exist.

**bug.js** contains the erroneous code, while **bugSolution.js** provides a corrected version with input validation using a simple try-catch block and a check for the existence of the required property.

## How to reproduce the bug:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `/users` with an empty or malformed JSON payload (e.g., `{}` or `{"invalid": "data"}`).
6. Observe the server crash.

## Solution:

The solution involves checking if `req.body` is present and has the necessary properties before accessing them. The improved code in **bugSolution.js** handles these scenarios gracefully.