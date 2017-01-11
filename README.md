# Orion

Description
--
A UI toolkit for rapid web development

Examples
- At the moment, there's no static site for examples. You can view the examples bundled with the code by cloning the repository, installing it, and going to [http://localhost:2003/](http://localhost:2003/)


Supported Browsers
- Chrome
- Firefox
- Safari Developer Preview
- IE Edge


Recommended Polyfills
- ES2015 via `babel-polyfill`
- File API for < IE11
- URLSearchParams for < IE 10
- FormData for < IE10
- Range input for < IE10

Usage in Production
===

Installation

- Add it to your project.json
 
`yarn add git://github.com/9cloud/orion.git`

- Compile style files via sassc
```
  sassc -m ./node_modules/orion/scss/main.scss /<your project>/orion.css
  sassc -m ./node_modules/orion/scss/fonts.scss /<your project>/fonts.css
```

In your HTML:
```html
    <link rel="stylesheet" href="/<your project>/main.css">    
    <link rel="stylesheet" href="/<your project>/fonts.css">
```

Setting up for Development
===

These instructions will guide you to set up a development environment to work on Orion, and contribute upstream or simply play around with the framework without having to commit to creating a new project.

The package comes bundled with the documentation website, and a set of examples to get started wtih.

Installation
---
Install required packages
  - `yarn install`
  
Install SassC: 
  - `brew install sassc` on Mac OSX, or install sassc on your platform. 

Usage
---
- Run Server via `yarn start`
- View at [http://localhost:2003/](http://localhost:2003/)

The development server will use:
- 2000(http) 
- 2001(websocket)
- 2003(browser sync)
- 2004(browser sync admin)
- 8080(webpack-dev-server)