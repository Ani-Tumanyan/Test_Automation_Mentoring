const { When } = require('@cucumber/cucumber');
const { Factory } = require('../../page_object/Factory.js');
const { UrlBuilder } = require('../../helpers/UrlBuilder')

When('I navigate to {string}', async function (pageName) {
        const urlBuilder = new UrlBuilder();
        await page.goto(urlBuilder.getUrl(pageName));
});

When('I click on element {string} on {string} page' , async function (element, pageName) {
        await page.click(Factory[`${pageName}`][`${element}`]);
});


