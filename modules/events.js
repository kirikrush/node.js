
  let events = [];
function init(app) {

}

function on(event, callback) {
  if (!events[event]) {
    events[event] = [];
  }
  events[event].push(callback);
}

function emit(event, data) {
  if(events[event]) {
    let current = events[event]
    for (let index = 0; index < current.length; index++) {
       current[index](data);
    }
  }
}

function off(event){
  delete events[event];
}


module.exports = {
  emit,
  on,
  init,
  off
}