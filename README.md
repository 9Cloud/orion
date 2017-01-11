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

Development
===

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

