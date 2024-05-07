const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    
    server.route(routes);
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

init();