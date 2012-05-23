load('vertx.js');

var webServerConf = {
	web_root: '..\\formz\\',
	port: 80,
	host: 'localhost',
	bridge: true,
	permitted: []
};

// Start the web server, with the config we defined above
vertx.deployVerticle('web-server', webServerConf);