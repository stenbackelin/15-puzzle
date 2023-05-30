# GAME SETTING

## Change amount of tiles
To change the amount of tiles in the board:
1. Change const 'numbers' in Board.js to ex [1, 2, 3, 4, 5, 6, 7, 8, 9]
2. Change value '15' in Tiles.js to 9
3. Change row 67 in App.css to 'grid-template-columns: repeat(5, var(--size));'

This will give you a game with 9 tiles with a 3x3 grid

## Se functionality for when a user wins
To see the message the user will get if the game is won, comment out '.sort(shuffle);' on row 7 in Board.js

# REACT APP

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.