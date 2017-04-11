# Babelbooks - Cover

## Prerequisites
* [Node.js](https://nodejs.org/) (and npm)
* [Gulp](http://gulpjs.com/): `npm install gulp-cli -g`

## Run the presentation server
First time or newly added package(s) from pull ?
```shell
npm install
```

Then, or every other time:
```shell
npm start
```

## Run the dev server (webpack hot reload)
```shell
npm run dev
```
This will serve with hot reload at `localhost:8080`.

## Build commands
### Build the server
```shell
gulp server:build
```

### Build the client
```shell
gulp client:build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Build everything
```shell
gulp build
```

## Clean commands
### Clean the server
```shell
gulp server:clean
```

### Clean the client
```shell
gulp client:clean
```

### Clean everything
```shell
gulp clean
```