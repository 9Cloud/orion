# Orion

Installation
- `npm install`
- `jspm install`

Usage
- Run Server via `node server.js`
- View at [http://localhost:2000/](http://localhost:2000/)

Uses ports: 2000(http) / 2001(websocket)

Examples
- todo

To package
  - npm pack
  - jspm link github:orion@version
  - More: https://github.com/jspm/registry/wiki/Configuring-Packages-for-jspm
  
  
Production Builds

    jspm bundle-sfx orion/app dist/prod.js --minify
    
Then in your HTML
    
    <script src="/dist/prod.js"></script>
