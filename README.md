# Github User Saver

This project was created using React with TypeScript and Firestore (Google's NoSQL database), to implement a Github "user saver" app. Using Github's API we can check if the Github username provided is valid. If valid, the data will be added onto a Firestore database. You will get a notification on whether the data was added to the database or not. The data will then be displayed on the front end. 

## Basic Architecture

The app is broken up into three parts. The InputField component will have a form with a search bar for the user to interact with, this is where the username will be collected. Username/setUsername along with a handleAdd function was passed in. The DataTable component will have the data from the Firestore displayed. It uses collection and getDocs to retrieve the data, only the data specified in model.ts will be displayed. The final part is the main App. This has the handleApp function, i had intended for the handleAdd to be inside of the Input component but decided to keep it here so that the function can deal with the notification along with adding data to the Firestore.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

