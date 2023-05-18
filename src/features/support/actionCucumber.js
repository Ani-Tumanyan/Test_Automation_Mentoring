const { Factory } = require('../../page_object/Factory.js');
const { UrlBuilder } = require('../../helpers/UrlBuilder')


class ActionsCucumber {
        async openUrl (pageName) {
                const urlBuilder = new UrlBuilder();
                return page.goto(urlBuilder.getUrl(pageName));
        }
        async clickOnElement (element, pageName) {
                const urlBuilder = new UrlBuilder();
                return page.click(Factory[`${pageName}`][`${element}`]);
        }
        async assertCount (count, element, pageName) {
                return expect(Factory[`${pageName}`][`${element}`]).toHaveCount(count);
        }
}

module.exports = { ActionsCucumber };