let logger;
let handler = require('./handler');
function reqType(req, body) {
  let message = (`${req.method} :${body}`);
  if (req.headers['content-type'] == 'application/json') {
    try {
      if (JSON.parse(body)) console.log('Valid JSON');
    }

    catch(err){
      logger.err("reqType", 'JSON isn"t valid');
    }
    
  }

  return message;

}

function init(app) {
  logger = app.logger;

}

module.exports = {
  reqType: reqType,
  init
}