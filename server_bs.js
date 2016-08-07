var browserSync = require("browser-sync").create();

// Argument parsing
var myArgs = require('optimist').argv;

// Argument: Should browser-sync open a window. Valid values are true/false/"external"/"local"
var browserSyncOpen = myArgs.bsOpen ? myArgs.bsOpen : false;

// Browser-Sync
browserSync.init({
    port : 2003,
    open : browserSyncOpen,
    ui   : {
        port: 2004
    },
    files: ["App/main.css", "App/demo.css"],
    proxy: "localhost:2002"
});