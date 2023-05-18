const { When } = require('@cucumber/cucumber');
const { Factory } = require('../../page_object/Factory.js');
const { UrlBuilder } = require('../../helpers/UrlBuilder')
const builder = require('./StepsBuilder')
const env = process.argv[process.argv.length - 1]



When('I navigate to {string}', async function (pageName) {
        console.info(`I navigate to ${pageName}`)
        await builder.runner(env).openUrl(pageName)
});

When('I click on element {string} on {string} page' , async function (element, pageName) {
        console.info(`I click on element ${element} on ${pageName} page`)
        await builder.runner(env).clickOnElement(element, pageName);
});


