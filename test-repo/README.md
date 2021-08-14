# Note

This project shows an easy and simple way to use **Modal** in react. and This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

`npm install`

## Features of Modal
  - Resize the Modal
  - Flexible for Long Content 
  - Open Modal inside other existing Modal like **stack** order and closed in **LIFO** (Last In First Out) order
  - **Modal** Component has own Title, Content, Footer Component (**ModalTitle, ModalContent, ModalFooter**)

## Options

A list of available properties can be found below. These can be passed to `Modal` component

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
isOpen|bool|yes|false|To open the Modal
width|string|no|600px|It gives custom width of Modal
height|string|no|auto|It gives custom height of Modal
positions|string|no|top|It gives position of Modal like top, center, bottom
customStyle|object|no||It gives custom style of Modal
handleClose|func|yes||The callback to close the Modal

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
