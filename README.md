# take-a-rest
a web push api used to remind you to take a rest every so often

## Requirements
This web app requires a redis database and any Node.js with ES6 support. `npm run` serves the app on port 3000. A VAPID key is required to run the application as well. This VAPID key must be stored in the `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY` environment variables.

## Organization
`/static` stores all the static HTML, JS, and CSS files for the frontend.

`/app` contains the server code:
* `/app/db` contains a module to connect to the Redis instance
* `/app/routes` contains handlers for the routes
