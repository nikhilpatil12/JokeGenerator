# Joke Generator API using Express and Canvas

This is a simple Express.js application that generates a joke as an SVG image. It uses the Canvas library to create the image and serves it through an API endpoint. The demo of this API is hosted at [Demo Link](https://jokerr.nikpatil.com/api/image).

## Setup

1. Make sure you have Node.js installed on your machine.

2. Clone the repository:
   ```bash
   git clone https://github.com/nikhilpatil12/JokeGenerator.git
   ```

## Install dependencies:
   ```bash
   npm install
   ```

## Run the application:
  ```bash
  node app.js
  ```
The server will start at http://localhost:3001.

## API Endpoint
- Get a Random Joke Image
- Endpoint: /api/image
- Method: GET
- Response Format: SVG image

## Example
  ```bash
  curl http://localhost:3001/api/image --output joke.svg
  ```

## Dependencies
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Canvas: Node.js Canvas library.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Notes
- The application reads joke data from a jokes.json file.
- The generated SVG image consists of a colored background, a border, and the question and answer text.
- Feel free to modify and extend the code according to your needs. If you encounter any issues or have suggestions, please open an issue.
