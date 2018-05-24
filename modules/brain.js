`use strict`;

let app,
  messages = [],
  sourceCounter = [],
  source,
  lastParty,
  xCoord,
  yCoord,
  members


function getUsers(element) {
  return new Promise(function (resolve, reject) {
    let sourceEx = element.split(' ')[0],
      xCoordEx = element.replace(sourceEx + " ", "").split(' ')[0],
      yCoordEx = element.replace(sourceEx + " " + xCoordEx + " ", "").split(' ')[0],
      membersEx = element.replace(sourceEx + " " + xCoordEx + " " + yCoordEx + " ", "").replace(members, "");
    if ((Math.pow((xCoord - xCoordEx), 2) + Math.pow((yCoord - yCoordEx), 2) <= 4000) && (membersEx)) {
      return (membersEx);
    }
  }
  )
}

function sendEvent(members) {
  console.log(`message was sent to ${members}`)
}
function init(core) {
  app = core;




  app.events.on('party', message => {
    messages.splice(0, 0, message);
    source = message.split(' ')[0];
    xCoord = message.replace(source + " ", "").split(' ')[0];
    yCoord = message.replace(source + " " + xCoord + " ", "").split(' ')[0];
    members = message.replace(source + " " + xCoord + " " + yCoord + " ", "");
    console.log(xCoord, yCoord, members);
    if (!sourceCounter[source]) {
      sourceCounter[source] = 1
    }
    else {
      sourceCounter[source] += 1;

    }
    if (messages.length > 10000) {
      messages.splice(10000, 1);
      sourceCounter[lastParty] -= 1;
    }
    lastParty = source;
    for (key in sourceCounter) {
      if (sourceCounter[key] / messages.length > 0.20) {
        console.error(sourceCounter[key] / messages.length > 0.20);
        app.events.emit('alert', key);
      }
    }

    messages.forEach(element => {

      Promise.all[getUsers(element), sendEvent(membersEx)]
        .then(
          result =>{
            console.log('Okay')
          }
        )
        .catch(
          error=>{
            console.log('Not okay');
          }
        )
    })
  })
    setInterval(function () {
      for (key in sourceCounter) {
        app.logger.warning(`${key}  ${sourceCounter[key]} from ${messages.length}`, `brain`);
      }

    }, 5000)


  }

function hashTimer() {
      setInterval(() => {
        var uuid = "", i, random;
        for (i = 0; i < 32; i++) {
          random = Math.random() * 16 | 0;

          if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
          }
          uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
      }, (Math.floor(Math.random() * (20000 - 10000)) + 10000))
    }

module.exports = {
      init
    }