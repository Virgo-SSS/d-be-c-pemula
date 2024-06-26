const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = hapi.server({
        port: 3000,
        // eslint-disable-next-line no-undef
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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