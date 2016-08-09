System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "*.css": {
      "loader": "css"
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-polyfill": "npm:babel-polyfill@6.13.0",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.13.2",
    "babel-preset-react": "npm:babel-preset-react@6.11.1",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bluebird": "npm:bluebird@3.4.1",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.9",
    "chance": "npm:chance@1.0.4",
    "classnames": "npm:classnames@2.2.5",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.26",
    "lodash": "npm:lodash@4.14.2",
    "markdown-it": "npm:markdown-it@7.0.0",
    "mobx": "npm:mobx@2.4.2",
    "mobx-react": "npm:mobx-react@3.5.4",
    "mobx-react-devtools": "npm:mobx-react-devtools@4.2.4",
    "moment": "npm:moment@2.14.1",
    "prosemirror": "npm:prosemirror@0.9.1",
    "react": "npm:react@0.14.8",
    "react-dom": "npm:react-dom@0.14.8",
    "react-router": "npm:react-router@2.6.1",
    "react-virtualized": "npm:react-virtualized@7.19.0",
    "redbox-react": "npm:redbox-react@1.3.0",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.1",
    "github:capaj/systemjs-hot-reloader@0.5.9": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.8",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:argparse@1.0.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.11.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@2.0.0"
    },
    "npm:babel-core@6.13.2": {
      "babel-code-frame": "npm:babel-code-frame@6.11.0",
      "babel-generator": "npm:babel-generator@6.11.4",
      "babel-helpers": "npm:babel-helpers@6.8.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-register": "npm:babel-register@6.11.6",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0",
      "babylon": "npm:babylon@6.8.4",
      "convert-source-map": "npm:convert-source-map@1.3.0",
      "debug": "npm:debug@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.4.0",
      "lodash": "npm:lodash@4.14.2",
      "minimatch": "npm:minimatch@3.0.3",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-regex": "npm:shebang-regex@1.0.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.11.4": {
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "lodash": "npm:lodash@4.14.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:babel-helper-bindify-decorators@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-builder-react-jsx@6.9.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.14.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-helper-call-delegate@6.8.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-define-map@6.9.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0",
      "lodash": "npm:lodash@4.14.2"
    },
    "npm:babel-helper-explode-assignable-expression@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-explode-class@6.8.0": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-function-name@6.8.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-hoist-variables@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-optimise-call-expression@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-regex@6.9.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0",
      "lodash": "npm:lodash@4.14.2"
    },
    "npm:babel-helper-remap-async-to-generator@6.11.2": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helper-replace-supers@6.8.0": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-helpers@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-async-to-generator@6.8.0": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
      "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0"
    },
    "npm:babel-plugin-transform-class-properties@6.11.5": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-decorators@6.13.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-do-expressions@6.8.0": {
      "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.10.1": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0",
      "lodash": "npm:lodash@4.14.2"
    },
    "npm:babel-plugin-transform-es2015-classes@6.9.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.8.0": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.11.5",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.11.5": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.11.3",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-types": "npm:babel-types@6.13.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.12.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0"
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.12.0": {
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.11.4": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-template": "npm:babel-template@6.9.0",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "regexpu-core": "npm:regexpu-core@2.0.0"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-export-extensions@6.8.0": {
      "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-flow-strip-types@6.8.0": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-function-bind@6.8.0": {
      "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
      "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-react-display-name@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-react-jsx-self@6.11.0": {
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-react-jsx-source@6.9.0": {
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.11.6"
    },
    "npm:babel-plugin-transform-regenerator@6.11.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-core": "npm:babel-core@6.13.2",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0",
      "babylon": "npm:babylon@6.8.4",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-transform-strict-mode@6.11.3": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0"
    },
    "npm:babel-polyfill@6.13.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "core-js": "npm:core-js@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-preset-es2015@6.13.2": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.8.0",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.11.5",
      "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.12.0",
      "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.12.0",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.11.4",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.11.4"
    },
    "npm:babel-preset-react@6.11.1": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0",
      "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
      "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.8.0",
      "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.8.0",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.11.0",
      "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.9.0"
    },
    "npm:babel-preset-stage-0@6.5.0": {
      "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0",
      "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.13.0"
    },
    "npm:babel-preset-stage-1@6.13.0": {
      "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0",
      "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.13.0"
    },
    "npm:babel-preset-stage-2@6.13.0": {
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.11.5",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
      "babel-preset-stage-3": "npm:babel-preset-stage-3@6.11.0"
    },
    "npm:babel-preset-stage-3@6.11.0": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0",
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0"
    },
    "npm:babel-register@6.11.6": {
      "babel-core": "npm:babel-core@6.13.2",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "core-js": "npm:core-js@2.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@1.0.0",
      "lodash": "npm:lodash@4.14.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.2.10"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.11.6": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-template@6.9.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "babel-types": "npm:babel-types@6.13.0",
      "babylon": "npm:babylon@6.8.4",
      "lodash": "npm:lodash@4.14.2"
    },
    "npm:babel-traverse@6.13.0": {
      "babel-code-frame": "npm:babel-code-frame@6.11.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-types": "npm:babel-types@6.13.0",
      "babylon": "npm:babylon@6.8.4",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.14.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.13.0": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "babel-traverse": "npm:babel-traverse@6.13.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.14.2",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.8.4": {
      "babel-runtime": "npm:babel-runtime@6.11.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.6": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chance@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:convert-source-map@1.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:error-stack-parser@1.3.6": {
      "stackframe": "npm:stackframe@0.3.1"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:home-or-tmp@1.0.0": {
      "os-tmpdir": "npm:os-tmpdir@1.0.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.0",
      "whatwg-fetch": "npm:whatwg-fetch@0.11.1"
    },
    "npm:json5@0.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:linkify-it@2.0.0": {
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:markdown-it@7.0.0": {
      "argparse": "npm:argparse@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "linkify-it": "npm:linkify-it@2.0.0",
      "mdurl": "npm:mdurl@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "uc.micro": "npm:uc.micro@1.0.2"
    },
    "npm:minimatch@3.0.3": {
      "brace-expansion": "npm:brace-expansion@1.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mobx-react-devtools@4.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mobx": "npm:mobx@2.4.2",
      "mobx-react": "npm:mobx-react@3.5.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mobx-react@3.5.4": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "mobx": "npm:mobx@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-tmpdir@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:prosemirror@0.9.1": {
      "browserkeymap": "npm:browserkeymap@1.0.1",
      "markdown-it": "npm:markdown-it@7.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "subscription": "npm:subscription@3.0.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:raf@3.2.0": {
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-addons-shallow-compare@15.3.0": {
      "react": "npm:react@15.3.0"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-dom@15.3.0": {
      "react": "npm:react@15.3.0"
    },
    "npm:react-router@2.6.1": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-virtualized@7.19.0": {
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "raf": "npm:raf@3.2.0",
      "react": "npm:react@15.3.0",
      "react-addons-shallow-compare": "npm:react-addons-shallow-compare@15.3.0",
      "react-dom": "npm:react-dom@15.3.0"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.3.0": {
      "fbjs": "npm:fbjs@0.8.3",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redbox-react@1.3.0": {
      "error-stack-parser": "npm:error-stack-parser@1.3.6",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.3.0",
      "react-dom": "npm:react-dom@15.3.0"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:regexpu-core@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.1",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stackframe@0.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
