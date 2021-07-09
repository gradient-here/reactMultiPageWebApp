<br>
React Multi Page Web App
<br><br>
React-multi-page-app is a multi-page application architecture based on react and webpack. Through compiling and generating static pages with clear corresponding directory structure, multi-page development and maintenance can be realized conveniently.

Based on [react-multi-page-app](https://github.com/leinov/react-multi-page-app) by [Leinov](https://github.com/leinov) 


## Overview

key | value
---|---
name | react-multi-page-app
desc | a scaffold of create react multi page app
author | gradient-here
version | 1.3.0

## Features

*multiple pages hot reloading in development enviroment
*new pages identified automaticlaly 

## Quick Start

install yarn globaly to project

install 
```
$ npm install yarn -g
```

install dependencies
```
$ yarn install
```

run dev server
```
$ yarn start
```

build
```
$ yarn build
```

Automatically open browser with development: http://localhost:3200 / production: http://localhost:3118 

## Usage
create a new page in the pages directory of src. and run ```npm run dev``` in the root directory of project
```
|-- src
    |-- components/
    |-- images/
    |-- pages/
        |-- index.js
        |-- index.css
        |-- pageTwo.js
        |-- pageTwo.css
```

## Version

version | desc
---|---
1.2.0 | add html template 
1.1.0 | init 

## License

[MIT](https://opensource.org/licenses/MIT)