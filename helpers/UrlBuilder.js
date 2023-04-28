const pages = require('../data/Pages.json');

class UrlBuilder {
    getUrl(url) {
        return pages[url]
    }
}

module.exports = { UrlBuilder };