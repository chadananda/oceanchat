const functions = require('firebase-functions');
// Import other modules and functions as needed

// Define and export Cloud Functions here
exports.chatApi = functions.https.onRequest(require('./chatApi'));
exports.documentIngestion = functions.https.onRequest(require('./documentIngestion'));
// Additional Cloud Functions as needed
