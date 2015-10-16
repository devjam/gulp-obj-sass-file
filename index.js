var util = require('util');
var gutil = require('gulp-util');
var extend = require('deep-extend');
var through = require('through2');
var objSass = require('obj-sass');


module.exports = function(opt){
  opt = opt || {};
  opt.obj = opt.obj || {};
  opt.output = opt.output || {};
  // opt.output.cwd = '';
  // opt.output.base = '';
  // opt.output.path = '';

  function transform(file, encoding, callback){
    var obj = require(file.path);
    if(util.isFunction(obj)) obj = obj();
    extend(opt.obj, obj);
    delete require.cache[file.path];
    callback();
  }

  function flush(callback){
    var sass = objSass(opt);
    var output = new gutil.File(opt.output);
    output.contents = new Buffer(sass);
    this.push(output);
    callback();
  }

  return through.obj(transform, flush);
};
