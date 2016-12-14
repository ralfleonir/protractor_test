/*
  Created by esalgado 01-27-15
*/
module.exports = function(grunt) {

  var seleniumChildProcesses = {};

  grunt.event.on('selenium.start', function(target, process) {
    grunt.log.ok('Saw process for target: ' +  target);
    seleniumChildProcesses[target] = process;
  });

  grunt.util.hooker.hook(grunt.fail, function() {
    // Clean up selenium if we left it running after a failure.
    grunt.log.writeln('Attempting to clean up running selenium server.');
    for (var target in seleniumChildProcesses) {
      grunt.log.ok('Killing selenium target: ' + target);
      try {
        seleniumChildProcesses[target].kill('SIGINT');
      } catch(e) {
        grunt.log.warn('Unable to stop selenium target: ' + target);
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt);

  grunt.task.loadTasks('grunt/tasks');
};
