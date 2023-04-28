class LoginPage {
    get 'Login Button'() {
        return '//button[text() = "Login"]';
    }
    get 'Invalid Login'() {
        return '//*[contains(@class, "inputOutside__invalid")]';
    }
  }

module.exports = { LoginPage };