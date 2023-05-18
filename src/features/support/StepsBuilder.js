const { ActionsWebdriver } = require('./actionsWdio');
const { ActionsCucumber } = require('./actionCucumber');
const {LoginPage} = require("../../page_object/LoginPage");

class Builder {

    runner(env) {
        if(env.includes('wdio')){
            return new ActionsWebdriver()
        } else if (env.includes('cucumber')) {
            return new ActionsCucumber()
        }
    }

}

module.exports = new Builder() ;