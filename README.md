# gulp-obj-sass-file

> gulp plugin for converting Object to scss/sass variable String and output file.

## Install

```bash
$ npm install gulp-obj-sass-file
```

## Usage

```js
var objSassFile = require('gulp-obj-sass-file'),
    gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('conf-to-sass', function() {
  return gulp
    .src([
      'data/config.js',
      'data/config.json',
      'data/config.coffee' // if you use coffee-script
      ])
    .pipe(objSassFile({
      output: {
        path: 'css/variable.scss'
      }
    }))
    .pipe(gulp.dest('./'));
});
```

### options
almost same options with `obj-sass`.  
but `output` added.

see [obj-sass](https://github.com/devjam/obj-sass#options).

#### output
Type: `Object` Default: {}  
used for `File` of `gulp-util` options

##### output.cwd
Type: `String`  Default: `process.cwd()`  
the current working directory.

##### output.base
Type: `String`  Default: `output.cwd`  
used for relative pathing. typically where a glob starts.

##### output.path
Type: `String`  Default: `undefined`  
full path to the file.

## License
[MIT](http://opensource.org/licenses/MIT)
