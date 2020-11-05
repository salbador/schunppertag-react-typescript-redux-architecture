# Trail Day Task

Development of a game

## Task

A: Develop a game with the techniques of your choice. The game should reflect the following
rules:

B: Think about how you can calculate a total score for the current game state.

## Task A

A: Develop a game with the techniques of your choice. The game should reflect the following
rules:

[✔] The playing field consists of 4 x 4 fields

[✔] Each field is initialized randomly with the value EMPTY, 1 or 2

[✔] The player can move the playing field with the cursor keys Left, Right, Up, Down.

[✔] Hereby each field moves one field in the corresponding direction.

It applies:

[✔] A field cannot be moved beyond the edge of the playing field.

[✔] A field cannot move into its direction, if the field in the corresponding
direction is already occupied and does not have the same value.

[✔] A field can be moved to another field if both values of the fields are identical.
If this happens, one field is removed and the value of the other field is
doubled.

[✔] After each move, a 1 or 2 is randomly added at the opposite edge of the move
direction, on an empty field.

[✔] The game is over when there are no more valid moves

## Task B

B: Think about how you can calculate a total score for the current game state.

### One example move

[✔] The player starts with the left game state and presses the "Down" button.

[✔] The 1st column does not move because each field is blocked.

[✔] In the 2. column the 2s connect to "4". The "1" slips into the free field.

[✔] In the 3rd column the 1's that are closest to the edge are connected.

[✔] In the 4th column the "1" slides down.

[✔] Since the player is pressing down, a number is randomly added to the top row. In this case a "1" at the top right.

| ![Before Move](./assets/images/view1.png 'Before Move') | Key Down ![Press Down Key](./assets/images/download.png 'download') | then all numbers fall ![After push down key](./assets/images/view2.png 'After Moved') | and twins are added

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install Packages

#### `yarn` or `npm install`

## Available Scripts

In the project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn generate` or `npm generate`

Scaffolding tool, see [generate-template-files](https://github.com/codeBelt/generate-template-files#readme). Check the `tools/templates` directory for existing templates.

#### `yarn build` or `npm build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the highscore performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section About [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
