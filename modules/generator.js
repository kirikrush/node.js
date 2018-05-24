request = require('request');

let sources = ['vk.com', 'facebook.com', 'myspace.com', 'ok.ru', 'pornohub.com', 'twitter.com'],
  maxTimeout = 10000,
  membersList = ['kek@lol.com', 'lol@kek.com', 'kek@kek.com', 'lol@lol.com', 'fatherOfNode@js.com'];

function init() {
  setInterval(function () {
    var myJSONObject = JSON.parse(generate());
    request({
      url: "http://localhost:8001",
      method: "POST",
      json: true,
      body: myJSONObject
    }, function (error, response, body) {
    })
  }, 1000)
}


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloat(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 10000) / 10000;
}

function generate() {
  let message = {
    "parties": []
  }
  let countParties = randomInt(1, 5);
  for (let x = 0; x < countParties; x++) {
    let newParty = {
      "source": null,
      "lat": null,
      "lng": null,
      "timeout": null,
      "members": null
    }
    let source = sources[randomInt(0, sources.length)];
    let lat = randomFloat(0, 100);
    let lng = randomFloat(0, 100);
    let timeout = randomInt(0, maxTimeout);
    let members =[ membersList[randomInt(0, membersList.length)]];
    // membersList.forEach(element => {
    //   if (randomInt(0, 2)) {
    //     members.push(element);
    //   }
    // });
    
  newParty.source = source;
  newParty.lat = lat;
  newParty.lng = lng;
  newParty.timeout = timeout;
  newParty.members = members;
  message.parties.push(newParty);
}
return (JSON.stringify(message));
}

init();

module.exports = {
  init
}