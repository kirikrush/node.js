'use strict';

let app,
  membersList = ['kek@lol.com', 'lol@kek.com', 'kek@kek.com', 'lol@lol.com', 'fatherOfNode@js.com'];

function init(core) {
  app = core;
  app.events.on('party', party => {
    app.logger.info(party, 'party');
  })

  app.events.on('alert', source => {
    membersList.forEach(element => {
      app.logger.warning(`member:${element}, source:${source} text:something interesting is planned`, `users`)
    });
    
  }
  )
}




module.exports = {
  init
}