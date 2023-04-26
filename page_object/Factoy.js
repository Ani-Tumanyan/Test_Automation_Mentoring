const { HomePage } = require('./HomePage');

class Factory {
    static 'Home Page' = new HomePage();
}

module.exports = { Factory };