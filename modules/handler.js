'use strict';

let app;


function init(core) {
  app = core;
  let parties;
  app.events.on('post', (body) => {
    try {
      parties = JSON.parse(body).parties;
    }
    catch(err){
      console.log('Faaaalse')
    }
    if(parties){
      parties.forEach(party => {
        setTimeout(function () {
          let message = `${party.source} ${party.lat} ${party.lng} ${party.members}`;
          app.events.emit('party', message)
        }, party.timeout);
      });
    }

    
  })
}



module.exports = {
  init
}