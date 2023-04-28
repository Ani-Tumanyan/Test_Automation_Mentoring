const { Then } = require('@cucumber/cucumber');
const { Factory } = require('../../page_object/Factory') ;

Then('I expect {int} element(s) {string} on {string} page to be displayed', async function (count, element, pageName) {
        await expect(Factory[`${pageName}`][`${element}`]).toHaveCount(count);
});





