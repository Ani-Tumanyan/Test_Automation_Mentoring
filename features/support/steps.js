const {Given, Then, When} = require('@cucumber/cucumber');
const { Factory } = require('../../page_object/Factoy.js') ;

When('I navigate to {string}', async function (pageName) {
        await page.goto(pageName);
});

When('I click on element {string} on {string} page' , async function (element, pageName) {
        await page.click(Factory[`${pageName}`][`${element}`])
});


