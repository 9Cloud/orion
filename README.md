# Orion

Installation
- `npm install`
- `jspm install`
- `brew install sassc`

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


Development

- Maybe use https://github.com/CanopyTax/webpack-system-register
- If we wrap webpack in systemjs calls; then maybe we can get hot-reloading to work w/o having to use whatever webpack gives you.


Interesting: https://github.com/webpack/react-proxy-loader

Also: https://github.com/rohitlodha/html-webpack-inline-chunk-plugin

CopyWebpackPlugin
InlineManifestWebpackPlugin
SWPrecacheWebpackPlugin
DedupePlugin


Integration with Django?

https://github.com/kossnocorp/assets-webpack-plugin


Instructional: https://medium.com/webpack/harnessing-the-power-of-webpack-2cd0e20ff1bf#.6flgepdhl



``` javascript
// the below will grab the home view as a promise
// we could also use System.load which is already a promise
/// but i don't know how that interacts with require.ensure...

export function loadHomeView(){
    return new Promise(function(resolve, reject){
        require.ensure([], function (require) {
            const homeView = require('./views/homeView');
            resolve(homeView)
        });
    })
}
```

```
AppConf{
  basename = "/messages",
  defer = True

  routes() {
      return SystemJS.load("./routes")
  }
}
```

If defer is set;

1. ready isn't called on the app
2. then on basename (e.g. /messages/hello/), Tide will call the application config to get a routes, which will asynchronously load the rest of the app; once the routes is back ready() is called on the app, and then we match against the route again.

```

// todo: ensure trailing & leading slashes in the router.

if(app_conf.defer) {
   this.router.route(app_conf.basename + "/{path*},
                    this.load_deferred_app.bind(this, app_conf),
                    "deferred_" + this.app_conf.name )
}

.......

load_deferred_app(app_conf, route){
  app_conf.routes()
    .then(routes => {
      for(route of routes){
          this.router.add(route)
      }
      // above might not work w/o restarting router...
      // call the route again
      this.router.redirect(route.location)
    })
}

```


