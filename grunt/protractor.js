module.exports = {
  protractor: {
    options: {
      directConnect: true,
      configFile: 'conf/conf.js',
      keepAlive: true,
      noColor: false
    },
    your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
      options: {
        configFile: {}, // Target-specific config file 
        args: {} // Target-specific arguments 
      }
    }
  }
};
