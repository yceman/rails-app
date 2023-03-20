const { watch } = require('gulp');

exports.default = function() {
  // The task will be executed upon startup
  watch('src/*.js', { ignoreInitial: false }, function(cb) {
    // body omitted
    cb();
  });
};
/*const { src, dest } = require('gulp');
exports.default = function () {
    return src('src/*.js')
    .pipe(dest('output/'));
}
function defaultTask(cb) {
    cb();
}
exports.default = defaultTask*/