module.exports = {
  xvfb: {
    command: 'Xvfb :99 -ac -screen 0 1600x1200x24',
    options: {
        async: true
    }
  }
};
