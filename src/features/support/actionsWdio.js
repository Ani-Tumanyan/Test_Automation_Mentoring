const { Factory } = require('../../page_object/Factory.js');
const { UrlBuilder } = require('../../helpers/UrlBuilder')


class ActionsWebdriver {
        async openUrl (pageName) {
                const urlBuilder = new UrlBuilder();
                return browser.url(urlBuilder.getUrl(pageName))
        }
        async clickOnElement (element, pageName) {
                const urlBuilder = new UrlBuilder();
                const myElement = await $(Factory[`${pageName}`][`${element}`])
                return myElement.click();
        }
        async assertCount (count, element, pageName) {
                return expect(Factory[`${pageName}`][`${element}`].length).toEqual(count);
        }
}

module.exports = { ActionsWebdriver };