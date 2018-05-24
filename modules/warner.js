'use strict';
const colors = require('colors');

function NormalDate(){
    let date = new Date().toISOString().replace('T',' ').replace('Z', '');
    return date;
}
function log(str, sender) {
    console.log(`${NormalDate()} <LOG> ${str} from ${sender} `);
};

function err(str, sender) {

    console.error(`${NormalDate()}  <ERROR>   ${str} from ${sender} `.red);
};

function info(str, sender) {

    console.info(`${NormalDate()}  <INFO>    ${str} from ${sender} `.green);
};

function debug(str, sender) {

    console.debug(`${NormalDate()}  <DEBUG>   ${str} from ${sender} `);
}

function warning(str, sender) {

    console.warn(`${NormalDate()}  <WARNING> ${str} from ${sender} `.yellow);
}
module.exports = {
    log: log,
    err: err,
    info: info,
    debug: debug,
    warning: warning
};