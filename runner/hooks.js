const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { webkit } = require("playwright");

setDefaultTimeout(50000)

BeforeAll(async function () {
    global.browser = await webkit.launch({
        headless: false,
        slowMo: 1000,
    });

});

AfterAll(async function () {

    await global.browser.close();
});

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

After(async function () {
    await global.page.close();
    await global.context.close();
});