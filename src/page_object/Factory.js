const { LoginPage } = require('./LoginPage');

class Factory {
    static 'Login Page' = new LoginPage();
}

module.exports = { Factory };