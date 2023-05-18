const { Then } = require('@cucumber/cucumber');
const { Factory } = require('../../page_object/Factory') ;
const builder = require('./StepsBuilder')
const env = process.argv[process.argv.length - 1]

Then('I expect {int} element(s) {string} on {string} page to be displayed', async function (count, element, pageName) {
        await builder.runner(env).assertCount(count, element, pageName);
});





