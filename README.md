# steps to run the whole application. Here's how to get everything running:

## make sure you're in the root directory of your project (renda).
## Install all dependencies for both frontend and backend:
`npm install`

## Start the application:
`npm start`

## Additional notes:
Make sure you have MongoDB running on your local machine, or update the MONGODB_URI in the backend .env file to point to your MongoDB instance.

## To run Storybook:
`npm run storybook`

### If you make changes to the backend TypeScript files, you may need to rebuild:
`cd backend && npm run build`

Then restart the server:
`npm run dev`




