# Movie Recommendations App

A React application for recommending movies based on genre and available time. This app follows SOLID principles, and is built using modern React features such as hooks and functional components.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

---

## Features

- Search for movie recommendations by genre and time.
- Validates input for genre and time in `HH:mm` format.
- Error handling for invalid inputs and when no recommendations are available.
- Follows SOLID principles for maintainable and scalable code.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/therahulcoder/movie-recommendations.git
   cd movie-recommendations
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Build the application:**
   For production build, run:
   ```bash
   npm run build
   ```

## Usage

Once the app is running, you can:

1. Enter a genre in input box.
2. Enter the time you are available to watch a movie in the `HH:mm` format.
3. Click "Get Recommendations" to view movie recommendations based on your input.
4. If the input is invalid, an error message will be displayed.
5. If no recommendations are available, a message will be displayed.
