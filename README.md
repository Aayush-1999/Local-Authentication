
This project shows **Local Authentication** using:
- [passport](http://www.passportjs.org/)
- [passport-local](http://www.passportjs.org/packages/passport-local/)
- [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose)

### SERVER

The Server is made on `Node.js (v10.15.3)`
<br/>
`Express.js` is used as the server framework (v4.17.1)

### DATABASE

The database used is `MongoDB`.
<br/>
`Mongoose.js` is used as an ODM (v5.6.11)

### NPM Commands

- **npm install** - installs all the dependencies
- **npm start** - lints the server and client script, starts eslint on watch mode on server scripts and starts the project at localhost:1998 in debug mode.
- **npm run start-w** - Restarts the server(using nodemon) on every save and lints the server and client side scripts on each save.
- **npm run start-w-lite** - Simply restarts the server(using nodemon) on every save.
- **npm run lint-server** - lints the server scripts (all scripts except that in node_module and public directory) once.
- **npm run lint-client** - lints the client scripts (all scripts in the public directory) once.
- **npm run lint-w** - starts the linter in watch mode. When called from root directory it watches the server scripts and when called in public directory it watches the client scripts.
- **npm run localTunnel** - exposes localhost:1998 to the world wide web
- **npm run lt** - runs npm start and npm run localTunnel in parallel
- **Use npm run** --silent <your-script> to hide the internal logs from your terminal window.
