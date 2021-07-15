const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


let sveltekitServer;
exports.ssr = functions.https.onRequest(async (request, response) => {
	if (!sveltekitServer) {
		functions.logger.info('Initialising SvelteKit SSR Handler');
		sveltekitServer = require('./ssr/index').default;
		functions.logger.info('SvelteKit SSR Handler initialised!');
	}

	functions.logger.info('Requested resource: ' + request.originalUrl);
	return sveltekitServer(request, response);
});