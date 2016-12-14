module.exports = function(grunt) {
  grunt.registerTask('test', [
        'start-selenium-server',
        'protractor',
        'stop-selenium-server']);
  grunt.registerTask('test-headless', [
        'shell:xvfb',
        'env:xvfb',
        'start-selenium-server',
        'protractor',
        'stop-selenium-server',
        'shell:xvfb:kill']);
};
