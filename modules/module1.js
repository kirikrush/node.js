let app;

function init(core) {
  app = core;
  loadPicture();
  function test () {

  }
  function test2() {

  }
}

function loadPicture() {
  app.events.emit("loadPicture");
}

module.exports = {
  init
}