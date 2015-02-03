var appId = 'bn26VA7yDzN6NRe4VHbOSwM5XJ8IOVJy1UrxnBOa';
var apiKey = 'ZN3YV2joKE98fte7xECdapU7348j4tv3r1rscP7e';

var Parse = require('eu.rebelcorp.parse');
//Parse.authenticate('<your session token>');
Parse.start();

Parse.enablePush();

Parse.subscribeChannel('myCanalMX');

Parse.addEventListener('notificationreceive', function(e) {
	alert("notification: ", JSON.stringify(e));
});

Parse.addEventListener('notificationopen', function(e) {
	alert("notification: ", JSON.stringify(e));
});

$.index.open();
