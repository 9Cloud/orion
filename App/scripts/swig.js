var swig = require('swig');

// Compile a file and store it, rendering it later
var tpl = swig.compileFile('/path/to/index-partial.html');
console.log(tpl({ article: { title: 'Swig is fun!' }}));

// Immediately render a Swig template from a string
console.log(swig.render('{% if foo %}Hooray!{% endif %}', { locals: { foo: true }}));
