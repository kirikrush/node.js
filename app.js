'use strict';
const logger = require('./modules/warner'),
    http = require('http'),
    querystring = require('querystring'),
    server = http.createServer(),
    typer = require('./modules/httpModule'),
    events = require('./modules/events'),
    module2 = require('./modules/module2'),
    module1 = require('./modules/module1'),
    handler = require('./modules/handler'),
    user = require('./modules/user'),
    generator = require('./modules/generator'),
    brain = require('./modules/brain'),
    app = { logger, events };
events.init(app);
handler.init(app);
typer.init(app);
user.init(app);
brain.init(app);
server.listen(8001);
generator.init;
server.on('request', (req, res) => {
    let body = '';
    req.on('data', (data) => {
        body += data;
        // console.log(typer.reqType(req, body));
    });

    req.on('end', () => {
        if (req.method == 'POST'){
            app.events.emit('post',body);
        }
        res.end();
    });
    res.end();
}
);
logger.log('kek', 'lol');
logger.err('fsd', 'sdfasfa');
logger.info('d', 'fff');
logger.debug('ddasd', 'sasf');
logger.warning('asdasd', 'asdasd');