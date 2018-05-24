let app;

function init(core) {
  app = core;
  app.events.on("loadPicture", () =>{
    app.logger.info('Privet events', 'Kek')
  } )

}


module.exports = {
  init
}